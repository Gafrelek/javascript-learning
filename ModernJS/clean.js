'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  // const limit = spendingLimits?.[user] ?? 0;
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, cleanUser }]
    : state;
  // budget.push({ value: -value, description, cleanUser });
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });

  // for (let entry of state)
  //   if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpenses(newBudget3, spendingLimits);

console.log(newBudget3);

const printBigExpenses = (state, bigLimit) => {
  // let output = '';
  // for (let entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? ` ${entry.description.slice(-2)} /` : ''; // Emojis are 2 chars

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
  // const bigExpensesReduced = state
  //   .filter(entry => {
  //     entry.value <= -bigLimit;
  //   })
  //   .reduce((str, cur) => {
  //     `${str} / ${cur.description.slice(-2)}`, '';
  //   });

  bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');

  // .filter(entry => entry.value <= -bigLimit)
  // .reduce((str, cur) =>
  //    `${str} / ${cur.description.slice(-2)}`;
  // , '');
  // console.log(bigExpensesReduced);
  console.log(bigExpenses);
};

printBigExpenses(newBudget3, 1000);
