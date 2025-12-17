import Core from './core.js';

export default class Equilibrium extends Core {
  constructor(initialBalance = 0, max = 100) {
    super('Equilibrium');
    this.balance = initialBalance;
    this.max = max;
    this.history = [];
    this.visualHistory = [];
    this.symbol = '#';
  }

  getBalance() {
    return this.balance;
  }

  getHistory() {
    return this.history;
  }

  adjust(value) {
    this.balance = Math.max(0, Math.min(this.max, value));
    this.history.push(this.balance);
    this.visualHistory.push({ value: this.balance, symbol: this.symbol });
    return this.balance;
  }

  autoCorrect(targets, weight = 1) {
    if (!Array.isArray(targets)) return this.balance;
    targets.sort((a, b) => b.priority - a.priority);
    for (const target of targets) {
      this.adjust(this.balance + (target.value - this.balance) * weight / 10);
    }
    return this.balance;
  }
}