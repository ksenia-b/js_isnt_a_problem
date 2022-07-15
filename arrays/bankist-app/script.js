'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1310],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

let currentAccount;

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1320];



const displayMovements = function (movements, sort=false) {
  console.log(movements);
   const movs = sort ? movements.slice().sort()
    containerMovements.innerHTML = '';
    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
            <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
`;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    })
}

displayMovements(account1.movements);


let sorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, true);
})


const createUsernames = function (accounts) {
    console.log("creating user names here ...")
    return accounts.forEach(function (acc) {
             acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    })
};

createUsernames(accounts);
console.log("createUsernames = ", accounts)

const updateUI = function(acc){

        displayMovements(acc.movements);

        calcDisplayBalance(acc);

        calcDisplaySummary(acc.movements);

};

const calcDisplaySummary = function (movements) {
    const incomes = movements.filter(mov => mov > 0).reduce((accounts, mov) => accounts + mov, 0);

    labelSumIn.textContent = `${incomes}€`;
    const out = movements.filter(mov => mov <= 0).reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;
    const interest = movements.filter(mov => mov > 0).map(deposit => deposit * 1.2 / 100).filter((int, i, arr) => {return int >= 1}).reduce((acc, mov) => acc + mov, 0)
    labelSumInterest.textContent = `${interest}€`;
}



const calcDisplayBalance = function (acc) {
  console.log("acc = ", acc);
    acc.balance = acc.movements.reduce((accounts, mov) => accounts + mov, 0);

    labelBalance.textContent = `${acc.balance} EUR`;
}
calcDisplayBalance(account1);
//
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES
//
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);


/////////////////////////////////////////////////

const euroToUsd = 1.1;


// pipeline:
// const totalDepositUSD = movements.filter(mov => mov > 0)
//     .map(mov => {
//       return mov * euroToUsd;
//     })
//     .reduce((accounts, mov) => accounts + mov, 0);

// console.log("movements);


btnLogin.addEventListener('click', function (e) {
    // Prevent form from submiting
    e.preventDefault();
    console.log('LOGIN', inputLoginUsername.value);
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log("currentAccount = ", currentAccount);
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        console.log('Login');
        labelWelcome.textContent = `Wellcome back, ${currentAccount.owner.split('')[0]}`;
        containerApp.style.opacity = 100;
        inputLoginUsername.value = '';
        inputLoginPin.value = '';
        inputLoginPin.blur();
        updateUI(currentAccount);
        // displayMovements(currentAccount.movements);
        //
        // calcDisplayBalance(currentAccount);
        //
        // calcDisplaySummary(currentAccount.movements);

    }
    else{
      console.log("wrong log in info...")
    }
});


btnClose.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Delete');
  if (inputCloseUsername.value === currentAccount.username && Number(inpuClosePin.value) === currentAccount.pin){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;

    inputCloseUsername.value = inputClosePin.value = '';
  }
})


btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  console.log("abc");
  // console.log("currentAccount = ", currentAccount);
  console.log("inputTransferTo = ", inputTransferTo.value);
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  console.log(amount);
  console.log("receiverAcc = ", receiverAcc);
  if (
      amount > 0 &&
          receiverAcc &&
  currentAccount.balance >= amount &&
      receiverAcc?.username !== currentAccount.username
  ){
    console.log('Transfer valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});


btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = inputTransferTo.value = '';
})

const bankDepositSum = accounts.map(acc => acc.movements);
console.log(bankDepositSum);


btnTransfer.addEventListener('click', function(e){
  
})