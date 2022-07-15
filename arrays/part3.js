// find method accepts a condition:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// the callback function returns a boolean
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

// It is simple to the filterl method. But there are two fundamental differences:
// 1 - filter returns all the elements the mutch the condition, while the find method only return the first one.

const account = accounts.find(acc => acc.ownew === 'Jeesica Davis');
console.log(account);