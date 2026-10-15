/* ==========================================================================
   VaultFlow AI — Standalone Canvas Chart & Visualizer Engine
   100% Offline, Zero-Dependency, High-DPI Retina Canvas Charts
   Features: TabPFN Probabilistic Envelope Shading, Curved Splines, Glow Gradients
   ========================================================================== */

class ChartEngine {
  static setupCanvas(canvas) {
    if (!canvas) return null;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    if (rect.width <= 10 || rect.height <= 10) return null;
    
    // Set actual canvas size adjusted for device pixel ratio
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx, width: rect.width, height: rect.height };
  }

  /**
   * Render TabPFN Cashflow Forecast with Confidence Interval Bands
   */
  static renderCashflowForecast(canvasId, forecast, currentCash) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const setup = this.setupCanvas(canvas);
    if (!setup) return;
    const { ctx, width, height } = setup;

    ctx.clearRect(0, 0, width, height);

    const padding = { top: 30, right: 40, bottom: 40, left: 60 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;
    if (chartW <= 20 || chartH <= 20) return;

    // Data points: Today, Day 30, Day 60, Day 90
    const points = [
      { label: 'Today', proj: currentCash, low: currentCash, high: currentCash },
      { label: '+30d', proj: forecast.days30.projected, low: forecast.days30.lower, high: forecast.days30.upper },
      { label: '+60d', proj: forecast.days60.projected, low: forecast.days60.lower, high: forecast.days60.upper },
      { label: '+90d', proj: forecast.days90.projected, low: forecast.days90.lower, high: forecast.days90.upper }
    ];

    // Find min and max for scaling
    const allVals = points.flatMap(p => [p.low, p.proj, p.high]);
    const minVal = Math.floor(Math.min(...allVals) * 0.85);
    const maxVal = Math.ceil(Math.max(...allVals) * 1.15);

    const getY = (val) => padding.top + chartH - ((val - minVal) / (maxVal - minVal)) * chartH;
    const getX = (idx) => padding.left + (idx / (points.length - 1)) * chartW;

    // Draw Subtle Grid & Horizontal Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    const gridSteps = 4;
    for (let i = 0; i <= gridSteps; i++) {
      const val = minVal + (i / gridSteps) * (maxVal - minVal);
      const y = getY(val);
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();

      // Y-axis label
      ctx.fillStyle = '#64748b';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'right';
      ctx.fillText(`$${(val / 1000).toFixed(1)}k`, padding.left - 10, y + 3);
    }

    // 1. Draw Confidence Interval Upper/Lower Area (TabPFN Bayesian Uncertainty Band)
    ctx.beginPath();
    // Top line (highs)
    points.forEach((p, idx) => {
      const x = getX(idx);
      const y = getY(p.high);
      if (idx === 0) ctx.moveTo(x, y);
      else {
        const prevX = getX(idx - 1);
        const prevY = getY(points[idx - 1].high);
        const cpX = (prevX + x) / 2;
        ctx.bezierCurveTo(cpX, prevY, cpX, y, x, y);
      }
    });
    // Bottom line in reverse (lows)
    for (let idx = points.length - 1; idx >= 0; idx--) {
      const p = points[idx];
      const x = getX(idx);
      const y = getY(p.low);
      const nextX = getX(idx + 1);
      const nextY = idx < points.length - 1 ? getY(points[idx + 1].low) : y;
      const cpX = (nextX + x) / 2;
      if (idx === points.length - 1) ctx.lineTo(x, y);
      else ctx.bezierCurveTo(cpX, nextY, cpX, y, x, y);
    }
    ctx.closePath();
    const confGrad = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
    confGrad.addColorStop(0, 'rgba(79, 172, 254, 0.18)');
    confGrad.addColorStop(1, 'rgba(0, 242, 254, 0.02)');
    ctx.fillStyle = confGrad;
    ctx.fill();

    // 2. Draw Main Projection Line
    ctx.beginPath();
    points.forEach((p, idx) => {
      const x = getX(idx);
      const y = getY(p.proj);
      if (idx === 0) ctx.moveTo(x, y);
      else {
        const prevX = getX(idx - 1);
        const prevY = getY(points[idx - 1].proj);
        const cpX = (prevX + x) / 2;
        ctx.bezierCurveTo(cpX, prevY, cpX, y, x, y);
      }
    });

    const lineGrad = ctx.createLinearGradient(padding.left, 0, width - padding.right, 0);
    lineGrad.addColorStop(0, '#00f2fe');
    lineGrad.addColorStop(1, '#4facfe');
    ctx.strokeStyle = lineGrad;
    ctx.lineWidth = 3;
    ctx.shadowColor = 'rgba(79, 172, 254, 0.6)';
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.shadowBlur = 0; // reset

    // 3. Draw Points, Tooltips and X-Axis Labels
    points.forEach((p, idx) => {
      const x = getX(idx);
      const y = getY(p.proj);

      // Point Outer Ring
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#07090e';
      ctx.fill();
      ctx.strokeStyle = '#00f2fe';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Point Center
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      // X-Axis Label
      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 11px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(p.label, x, height - 12);

      // Value Pill on Top
      ctx.fillStyle = '#f8fafc';
      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText(`$${p.proj.toLocaleString()}`, x, y - 14);
    });
  }

  /**
   * Render Category Doughnut Breakdown
   */
  static renderCategoryDoughnut(canvasId, expenses) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const setup = this.setupCanvas(canvas);
    if (!setup) return;
    const { ctx, width, height } = setup;

    ctx.clearRect(0, 0, width, height);

    // Aggregate by Category
    const categoryTotals = {};
    let totalExpense = 0;
    expenses.forEach(e => {
      categoryTotals[e.category] = (categoryTotals[e.category] || 0) + e.amount;
      totalExpense += e.amount;
    });

    const categories = Object.keys(categoryTotals);
    if (categories.length === 0 || totalExpense === 0) return;

    const colors = [
      '#00f2fe', '#8e2de2', '#10b981', '#f59e0b', '#f43f5e', '#3b82f6', '#ec4899'
    ];

    const centerX = width / 2;
    const centerY = height / 2;
    const outerRadius = Math.max(15, Math.min(centerX, centerY) - 15);
    const innerRadius = Math.max(5, outerRadius * 0.65);

    if (outerRadius <= 15) return;

    let startAngle = -Math.PI / 2;

    categories.forEach((cat, idx) => {
      const sliceAngle = (categoryTotals[cat] / totalExpense) * (Math.PI * 2);
      const endAngle = startAngle + sliceAngle;
      const color = colors[idx % colors.length];

      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
      ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
      ctx.closePath();

      ctx.fillStyle = color;
      ctx.shadowColor = color + '40';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      startAngle = endAngle;
    });

    // Center Text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#64748b';
    ctx.font = '600 10px Outfit, sans-serif';
    ctx.fillText('TOTAL EXPENSES', centerX, centerY - 10);

    ctx.fillStyle = '#f8fafc';
    ctx.font = '700 16px "JetBrains Mono", monospace';
    ctx.fillText(`$${Math.round(totalExpense).toLocaleString()}`, centerX, centerY + 12);
  }
}
