import Equilibrium from './equilibrium.js';
import Strategy from './strategy.js';

const eqInstance = new Equilibrium(0, 100);
const strategy = new Strategy();

console.log('Core status: init');
console.log('Initial balance:', eqInstance.getBalance());

for (let step = 1; step <= 5; step++) {
  console.log(`\n--- Step ${step} ---`);
  const targets = strategy.generateTargets(eqInstance.getBalance());
  console.log('Generated targets:', targets);
  eqInstance.autoCorrect(targets, 5);
  console.log('Balance after auto-correct:', eqInstance.getBalance());

  const maxBarLength = 20;
  eqInstance.visualHistory.forEach((entry, index) => {
    const barLength = Math.min(Math.round((entry.value / eqInstance.max) * maxBarLength), maxBarLength);
    const bar = entry.symbol.repeat(barLength);
    console.log(`${index.toString().padStart(2,'0')} | ${bar} (${entry.value})`);
  });
  eqInstance.visualHistory = [];
}

console.log('\nFinal balance:', eqInstance.getBalance());
console.log('History:', eqInstance.getHistory());