/* ==========================================================================
   VaultFlow AI — Reactive State Management Store
   Local-first persistence, reactive listeners, and active persona management
   ========================================================================== */

class VaultState {
  constructor() {
    this.listeners = new Map();
    this.currentPersonaId = 'alex_designer';
    this.currentView = 'overview';
    this.isOffline = true;
    this.scannedInvoices = [];
    this.customExpenses = [];
    this.activeVoiceState = { isRecording: false, transcript: '', status: 'idle' };
    
    // Load persisted state if exists
    this.init();
  }

  init() {
    try {
      const savedPersona = localStorage.getItem('vaultflow_persona');
      if (savedPersona && FREELANCER_PERSONAS[savedPersona]) {
        this.currentPersonaId = savedPersona;
      }
      const savedExpenses = localStorage.getItem('vaultflow_custom_expenses');
      if (savedExpenses) {
        this.customExpenses = JSON.parse(savedExpenses);
      }
      const savedInvoices = localStorage.getItem('vaultflow_scanned_invoices');
      if (savedInvoices) {
        this.scannedInvoices = JSON.parse(savedInvoices);
      }
    } catch (e) {
      console.warn('VaultFlow local storage read exception:', e);
    }
  }

  getPersona() {
    const base = FREELANCER_PERSONAS[this.currentPersonaId];
    // Merge any custom scanned items
    const personaInvoices = [...base.invoices, ...this.scannedInvoices];
    const personaExpenses = [...base.expenses, ...this.customExpenses];

    // Recalculate dynamic totals
    const totalPending = personaInvoices
      .filter(i => i.status === 'pending')
      .reduce((sum, i) => sum + i.amount, 0);

    const totalDeductions = personaExpenses
      .reduce((sum, e) => sum + (e.deductionAmount || 0), 0);

    return {
      ...base,
      invoices: personaInvoices,
      expenses: personaExpenses,
      pendingInvoicesTotal: totalPending,
      taxSavedYTD: base.taxSavedYTD + Math.round(totalDeductions * 0.30)
    };
  }

  setPersona(personaId) {
    if (FREELANCER_PERSONAS[personaId]) {
      this.currentPersonaId = personaId;
      try {
        localStorage.setItem('vaultflow_persona', personaId);
      } catch (e) {}
      this.notify('persona_changed', this.getPersona());
    }
  }

  setView(viewId) {
    this.currentView = viewId;
    this.notify('view_changed', viewId);
  }

  addScannedInvoice(invoice) {
    this.scannedInvoices.unshift(invoice);
    try {
      localStorage.setItem('vaultflow_scanned_invoices', JSON.stringify(this.scannedInvoices));
    } catch (e) {}
    this.notify('invoice_added', invoice);
    this.notify('data_updated', this.getPersona());
  }

  addExpense(expense) {
    this.customExpenses.unshift(expense);
    try {
      localStorage.setItem('vaultflow_custom_expenses', JSON.stringify(this.customExpenses));
    } catch (e) {}
    this.notify('expense_added', expense);
    this.notify('data_updated', this.getPersona());
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
  }

  notify(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(cb => {
        try {
          cb(data);
        } catch (e) {
          console.error(`Error in state listener for ${event}:`, e);
        }
      });
    }
  }
}

// Global Singleton State Instance
const appState = new VaultState();
