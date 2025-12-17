export default class Strategy {
  constructor() {
    this.targets = [];
  }

  generateTargets(currentBalance) {
    this.targets = [];

    if (currentBalance < 30) this.targets.push({ value: currentBalance + 30, priority: 3 });
    if (currentBalance > 70) this.targets.push({ value: currentBalance - 30, priority: 3 });

    this.targets.push({ value: 50, priority: 2 });

    const randomAdjustment = Math.floor(Math.random() * 21) - 10;
    this.targets.push({ value: currentBalance + randomAdjustment, priority: 1 });

    this.targets = this.targets.map(t => ({
      value: Math.max(0, Math.min(100, t.value)),
      priority: t.priority
    }));

    return this.targets;
  }
}