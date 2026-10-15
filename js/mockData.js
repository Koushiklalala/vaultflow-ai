/* ==========================================================================
   VaultFlow AI — Mock Datasets & Freelancer Personas
   Realistic financial ledgers, invoice items, and tabular CSV records
   ========================================================================== */

const FREELANCER_PERSONAS = {
  alex_designer: {
    id: 'alex_designer',
    name: 'Alex Rivera',
    title: 'Brand & Product UI/UX Designer',
    avatar: '🎨',
    currency: 'USD',
    currentCash: 14820,
    monthlyBurn: 3250,
    runwayMonths: 4.5,
    taxSavedYTD: 5240,
    auditReadinessScore: 94,
    pendingInvoicesTotal: 12300,
    invoices: [
      {
        id: 'INV-2026-081',
        client: 'Acme Health Inc',
        project: 'Telehealth Mobile App Redesign (Milestone 2)',
        amount: 4500,
        issueDate: '2026-09-28',
        dueDate: '2026-10-28',
        status: 'pending',
        daysOverdue: 0,
        historicalPaymentSpeed: 18, // days
        tabpfnRiskScore: 0.14,
        tabpfnRiskCategory: 'low',
        tabpfnRiskFactors: ['Prompt historical payer', 'Low contract variance', 'Active retainer']
      },
      {
        id: 'INV-2026-079',
        client: 'FinScale Ventures',
        project: 'SaaS Pitch Deck & Brand Guidelines',
        amount: 5800,
        issueDate: '2026-09-05',
        dueDate: '2026-10-05',
        status: 'pending',
        daysOverdue: 10,
        historicalPaymentSpeed: 42,
        tabpfnRiskScore: 0.78,
        tabpfnRiskCategory: 'high',
        tabpfnRiskFactors: ['Net-30 agreement breached', 'Series A funding round pending', 'Late on previous 2 invoices']
      },
      {
        id: 'INV-2026-075',
        client: 'Nova Media Studio',
        project: 'Design System Component Library (Figma)',
        amount: 2000,
        issueDate: '2026-10-02',
        dueDate: '2026-11-02',
        status: 'pending',
        daysOverdue: 0,
        historicalPaymentSpeed: 25,
        tabpfnRiskScore: 0.32,
        tabpfnRiskCategory: 'low',
        tabpfnRiskFactors: ['New client relationship', 'Deposit paid on time']
      },
      {
        id: 'INV-2026-068',
        client: 'Kona Coffee Roasters',
        project: 'Packaging & E-commerce Redesign',
        amount: 3400,
        issueDate: '2026-08-15',
        dueDate: '2026-09-15',
        status: 'paid',
        paidDate: '2026-09-12',
        daysOverdue: 0,
        historicalPaymentSpeed: 28,
        tabpfnRiskScore: 0.08,
        tabpfnRiskCategory: 'low',
        tabpfnRiskFactors: ['Paid early via ACH']
      }
    ],
    expenses: [
      { id: 'EXP-101', vendor: 'Figma Inc', date: '2026-10-01', amount: 96.00, category: 'Software & Subscriptions', scheduleCLine: 'Line 18', deductiblePercent: 100, deductionAmount: 96.00, status: 'Audited (Gemma 2)', rationale: 'Primary design CAD tool for client UI mockups and prototypes.' },
      { id: 'EXP-102', vendor: 'Adobe Creative Cloud', date: '2026-10-02', amount: 59.99, category: 'Software & Subscriptions', scheduleCLine: 'Line 18', deductiblePercent: 100, deductionAmount: 59.99, status: 'Audited (Gemma 2)', rationale: 'Illustrator and Photoshop software for vector asset creation.' },
      { id: 'EXP-103', vendor: 'Blue Bottle Coffee', date: '2026-10-04', amount: 48.50, category: 'Meals (Client Meeting)', scheduleCLine: 'Line 24b', deductiblePercent: 50, deductionAmount: 24.25, status: 'Audited (Gemma 2)', rationale: 'Lunch meeting with client Alex Rivera discussing design brief.' },
      { id: 'EXP-104', vendor: 'Apple Store', date: '2026-09-14', amount: 1299.00, category: 'Office Equipment (Section 179)', scheduleCLine: 'Line 13', deductiblePercent: 100, deductionAmount: 1299.00, status: 'Audited (Gemma 2)', rationale: 'MacBook external 5K monitor dedicated 100% for freelance design station.' },
      { id: 'EXP-105', vendor: 'Webflow Hosting', date: '2026-10-05', amount: 39.00, category: 'Web & Hosting Infrastructure', scheduleCLine: 'Line 18', deductiblePercent: 100, deductionAmount: 39.00, status: 'Audited (Gemma 2)', rationale: 'Portfolio staging and client prototype hosting.' },
      { id: 'EXP-106', vendor: 'WeWork Coworking', date: '2026-10-01', amount: 450.00, category: 'Rent / Office Space', scheduleCLine: 'Line 20b', deductiblePercent: 100, deductionAmount: 450.00, status: 'Audited (Gemma 2)', rationale: 'Dedicated hot desk membership for professional client consultations.' }
    ],
    tabpfnForecast: {
      days30: { projected: 16800, lower: 14200, upper: 18900 },
      days60: { projected: 18400, lower: 15100, upper: 21500 },
      days90: { projected: 21200, lower: 16800, upper: 24900 },
      anomaliesDetected: [
        { type: 'Subscription Creep', description: 'Duplicated Loom Pro and Screen Studio subscriptions detected across bank statements', savingPotential: '$180/year' },
        { type: 'Late Inflow Risk', description: 'FinScale Ventures invoice ($5,800) delayed beyond standard deviation; projected 18-day cashflow dip', action: 'Automated polite reminder recommended' }
      ]
    }
  },

  marcus_dev: {
    id: 'marcus_dev',
    name: 'Marcus Chen',
    title: 'Senior Full-Stack & Cloud Contractor',
    avatar: '💻',
    currency: 'USD',
    currentCash: 29500,
    monthlyBurn: 5800,
    runwayMonths: 5.1,
    taxSavedYTD: 11420,
    auditReadinessScore: 97,
    pendingInvoicesTotal: 30500,
    invoices: [
      {
        id: 'INV-2026-104',
        client: 'CloudVibe Systems',
        project: 'Kubernetes Cluster Migration & Helm Pipelines',
        amount: 12500,
        issueDate: '2026-09-20',
        dueDate: '2026-10-20',
        status: 'pending',
        daysOverdue: 0,
        historicalPaymentSpeed: 21,
        tabpfnRiskScore: 0.18,
        tabpfnRiskCategory: 'low',
        tabpfnRiskFactors: ['Enterprise Net-30 compliant', 'Automated vendor portal']
      },
      {
        id: 'INV-2026-102',
        client: 'Stealth AI Labs',
        project: 'Fine-Tuning Harness & Vector Search Setup',
        amount: 18000,
        issueDate: '2026-08-25',
        dueDate: '2026-09-25',
        status: 'pending',
        daysOverdue: 20,
        historicalPaymentSpeed: 49,
        tabpfnRiskScore: 0.85,
        tabpfnRiskCategory: 'high',
        tabpfnRiskFactors: ['Net-30 exceeded by 20 days', 'CFO email bounce back', 'Pre-seed runway uncertainty']
      }
    ],
    expenses: [
      { id: 'EXP-201', vendor: 'Amazon Web Services', date: '2026-10-03', amount: 384.50, category: 'Cloud Infrastructure', scheduleCLine: 'Line 18', deductiblePercent: 100, deductionAmount: 384.50, status: 'Audited (Gemma 2)', rationale: 'EC2 GPU instances and S3 storage for running client staging workloads.' },
      { id: 'EXP-202', vendor: 'GitHub Enterprise & Copilot', date: '2026-10-01', amount: 49.00, category: 'Software & Subscriptions', scheduleCLine: 'Line 18', deductiblePercent: 100, deductionAmount: 49.00, status: 'Audited (Gemma 2)', rationale: 'Code repository hosting and developer AI tooling.' },
      { id: 'EXP-203', vendor: 'Subcontractor - QA Tester', date: '2026-09-30', amount: 1500.00, category: 'Contract Labor', scheduleCLine: 'Line 11', deductiblePercent: 100, deductionAmount: 1500.00, status: 'Audited (Gemma 2)', rationale: 'Independent QA contractor for automated regression test suite (1099-NEC required).' }
    ],
    tabpfnForecast: {
      days30: { projected: 36200, lower: 28000, upper: 44000 },
      days60: { projected: 41000, lower: 31000, upper: 51000 },
      days90: { projected: 47500, lower: 35000, upper: 60000 },
      anomaliesDetected: [
        { type: 'Unused Cloud Compute', description: 'Unattached AWS EBS volume running for 45 days at $88/mo', savingPotential: '$1,056/year' },
        { type: 'Concentration Risk', description: '60% of Q4 accounts receivable concentrated in single late-paying startup (Stealth AI Labs)', action: 'Require 50% upfront for future milestones' }
      ]
    }
  },

  elena_photo: {
    id: 'elena_photo',
    name: 'Elena Rostova',
    title: 'Commercial & Editorial Photographer',
    avatar: '📷',
    currency: 'USD',
    currentCash: 9400,
    monthlyBurn: 2800,
    runwayMonths: 3.3,
    taxSavedYTD: 4180,
    auditReadinessScore: 91,
    pendingInvoicesTotal: 6700,
    invoices: [
      {
        id: 'INV-2026-033',
        client: 'Vogue Regional Editorial',
        project: 'Fall Fashion Lookbook Shoot',
        amount: 3800,
        issueDate: '2026-10-04',
        dueDate: '2026-11-04',
        status: 'pending',
        daysOverdue: 0,
        historicalPaymentSpeed: 30,
        tabpfnRiskScore: 0.22,
        tabpfnRiskCategory: 'low',
        tabpfnRiskFactors: ['Publisher Net-30 standards', 'Signed contract with purchase order']
      },
      {
        id: 'INV-2026-031',
        client: 'Luxe Apparel NYC',
        project: 'E-commerce Catalog Product Shots',
        amount: 2900,
        issueDate: '2026-09-10',
        dueDate: '2026-10-10',
        status: 'pending',
        daysOverdue: 5,
        historicalPaymentSpeed: 38,
        tabpfnRiskScore: 0.64,
        tabpfnRiskCategory: 'med',
        tabpfnRiskFactors: ['Past invoice paid on day 41', 'Contact changed in accounting']
      }
    ],
    expenses: [
      { id: 'EXP-301', vendor: 'Milk Studios NYC', date: '2026-10-06', amount: 850.00, category: 'Studio / Equipment Rental', scheduleCLine: 'Line 20a', deductiblePercent: 100, deductionAmount: 850.00, status: 'Audited (Gemma 2)', rationale: 'Commercial photography studio rental for client apparel shoot.' },
      { id: 'EXP-302', vendor: 'B&H Photo Video', date: '2026-09-22', amount: 320.00, category: 'Supplies & Expendables', scheduleCLine: 'Line 22', deductiblePercent: 100, deductionAmount: 320.00, status: 'Audited (Gemma 2)', rationale: 'Gaffer tape, diffusion paper, and backup SDXC memory cards for commercial assignments.' },
      { id: 'EXP-303', vendor: 'United Airlines', date: '2026-09-18', amount: 488.20, category: 'Travel (Out of Town Client)', scheduleCLine: 'Line 24a', deductiblePercent: 100, deductionAmount: 488.20, status: 'Audited (Gemma 2)', rationale: 'Round-trip airfare to Chicago for on-location brand campaign production.' }
    ],
    tabpfnForecast: {
      days30: { projected: 11800, lower: 9200, upper: 14100 },
      days60: { projected: 13500, lower: 10100, upper: 16900 },
      days90: { projected: 16200, lower: 11800, upper: 20500 },
      anomaliesDetected: [
        { type: 'Lumpy Revenue Pattern', description: 'Seasonal drop detected in November historical CSVs; recommend booking mini-sessions early', savingPotential: 'Preserves runway' }
      ]
    }
  }
};

const SAMPLE_INVOICE_TEMPLATES = [
  {
    id: 'sample_adobe',
    name: 'Adobe Creative Cloud — All Apps Annual ($659.88)',
    type: 'software',
    rawText: `INVOICE #AD-982319-2026
Adobe Systems Incorporated
Date: October 10, 2026
Billed to: Alex Rivera Creative
Line Items:
- Creative Cloud All Apps Individual Annual Plan: $659.88
Subtotal: $659.88
Sales Tax: $0.00
Total Paid: $659.88 (Visa ending 4120)`,
    gemmaAnalysis: {
      vendor: 'Adobe Systems Incorporated',
      date: '2026-10-10',
      total: 659.88,
      currency: 'USD',
      scheduleCCategory: 'Software & Subscriptions',
      scheduleCLine: 'Line 18 (Office / Subscriptions)',
      deductiblePercent: 100,
      taxSavedEst: 211.16, // based on 32% marginal tax bracket
      confidence: 0.99,
      auditJustification: 'Software suites utilized exclusively for client design production and digital deliverables qualify for 100% deduction under IRC § 162(a).'
    }
  },
  {
    id: 'sample_coffee',
    name: 'Blue Bottle Coffee & Bistro — Client Strategy Lunch ($64.50)',
    type: 'meals',
    rawText: `RECEIPT #BB-44210
Blue Bottle Coffee & Kitchen - Soho NY
Date: October 14, 2026 12:45 PM
Server: David M.
Items:
1x Single Origin Drip: $5.50
1x Avocado Toast: $16.00
1x Truffle Panini: $22.00
1x Sparkling Water: $6.00
Subtotal: $49.50
Tax (8.875%): $4.40
Tip (21%): $10.60
Total Paid: $64.50 (MasterCard 9012)`,
    gemmaAnalysis: {
      vendor: 'Blue Bottle Coffee & Kitchen',
      date: '2026-10-14',
      total: 64.50,
      currency: 'USD',
      scheduleCCategory: 'Meals & Dining with Business Purpose',
      scheduleCLine: 'Line 24b (Meals & Entertainment)',
      deductiblePercent: 50,
      taxSavedEst: 10.32,
      confidence: 0.96,
      auditJustification: 'Under IRC § 274(k), business meals with clients to negotiate design contracts or deliverables are 50% tax deductible. Keep notes on attendees.'
    }
  },
  {
    id: 'sample_aws',
    name: 'Amazon Web Services — Cloud Compute & Hosting ($384.50)',
    type: 'infrastructure',
    rawText: `AMAZON WEB SERVICES, INC.
INVOICE SUMMARY #AWS-38910-1026
Account ID: 9482-1049-5512
Billing Period: September 1 - September 30, 2026
Charges:
- Amazon Elastic Compute Cloud (EC2): $245.20
- Amazon Simple Storage Service (S3): $48.30
- Amazon Relational Database Service (RDS): $91.00
Total Amount Due: $384.50 USD
Payment Status: Charged to Corporate Amex`,
    gemmaAnalysis: {
      vendor: 'Amazon Web Services, Inc.',
      date: '2026-10-01',
      total: 384.50,
      currency: 'USD',
      scheduleCCategory: 'Cloud Hosting & Infrastructure',
      scheduleCLine: 'Line 18 (Office expense & web services)',
      deductiblePercent: 100,
      taxSavedEst: 123.04,
      confidence: 0.99,
      auditJustification: 'Hosting and cloud computation servers required to deploy client web applications are ordinary and necessary business expenses under IRC § 162.'
    }
  }
];

// Schedule C Tax Categories Directory with Audit Standards
const SCHEDULE_C_CATEGORIES = [
  { code: 'Line 8', name: 'Advertising & Marketing', desc: 'Google ads, domain names, portfolio hosting, promotional collateral', rate: '100%' },
  { code: 'Line 9', name: 'Car and Truck Expenses', desc: 'Standard mileage rate (67¢/mile in 2024–2026) or actual expenses', rate: '100% biz' },
  { code: 'Line 11', name: 'Contract Labor', desc: 'Subcontractors, external developers, QA testers (>=$600 requires 1099-NEC)', rate: '100%' },
  { code: 'Line 13', name: 'Depreciation & Section 179', desc: 'Laptops, monitors, camera bodies, ergonomic desks placed in service', rate: '100% upfront' },
  { code: 'Line 18', name: 'Office Expense & Software SaaS', desc: 'Figma, GitHub, Slack, Adobe, Notion, AWS, office stationery', rate: '100%' },
  { code: 'Line 20b', name: 'Rent or Lease (Office Space)', desc: 'Coworking spaces, dedicated studios, physical desk memberships', rate: '100%' },
  { code: 'Line 24a', name: 'Travel (Out of Town)', desc: 'Airfare, hotels, rental cars for conferences or on-site client work', rate: '100%' },
  { code: 'Line 24b', name: 'Deductible Meals', desc: 'Meals with clients or while traveling overnight for business', rate: '50%' }
];
