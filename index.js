//let shoppingList = ['Milk', 'Bread', 'Eggs'];
//shoppingList.unshift('Sweets'); // Adds array item at beginning of array (shift removes first element)
//shoppingList.push('Butter'); //Adds array item at end of array
//console.log(shoppingList);

//let employees = ['Lethabo', 'Siya', 'Solomon'];
//employees.push('Makwa');
//employees.pop('Makwa'); //Removes array item at the end
//console.log(employees);

// let priceList = [19.20, 12, 16];

// let cities = ['Johannesburg', 'Cape Town', 'Durban'];

// console.log(cities);

// cities.shift(); //Removes first element
// console.log(cities);

// cities.unshift('London'); //Adds element to beginning
// console.log(cities);

// if (cities.includes('London')){
//     console.log('London is a lovely city!');
// } else {
//     console.log('This city does not appear in the array');
// }

// let absentees = [
//     {name: 'Makwa', age: 23, reason: 'Traffic'},
//     {name: 'Lona', age: 21, reason: 'Woke up late'},
//     {name: 'Thabang', age: 22, resaon: 'Graduation'}
// ];
//
// console.log(absentees[0].name, absentees[0].reason);

//function calculate (price, quantity) {
//     return price * quantity;
// }
//
// console.log(calculate(20, 5));

// let product = [
//     {
//         name: 'Laptop',
//         model: 'Dell',
//         price: 12000
//     },
//
//     {
//         name: 'Cellphone',
//         model: 'Samsung Z Fold 7',
//         price: 56000
//     },
//
//     {
//         name: 'iPad',
//         model: 'Air Gen 4',
//         price: 10000
//     }
// ];
//
// function productDetails(product) {
//     return product[0].name + ': ' + product[0].price + '\n' + product[1].name + ': ' + product[1].price;
// }
//
// console.log(productDetails(product));

let me = {
    name: 'Hishaam',
    amount: 1000000,

    product: [
        {
            name: 'Mouse',
            price: 100000
        },

        {
            name: 'Keyboard',
            price: '200000'
        }
    ]
}

function buyProduct (me){
    return 'Customer name: ' + me.name + '\n\n' + 'Purchase outline: \n' + me.product[0].name + ': ' +
        me.product[0].price + '\n' + me.product[1].name + ': ' + me.product[1].price + '\n\n' + 'Customer balance: \n'
        + me.amount + ' - ' + me.product[0].price + ' - ' + me.product[1].price + '\n' + '= R' +  (me.amount - me.product[0].price - me.product[1].price)
}

console.log(buyProduct(me));

let account = {
    accountNumber: '123456',
    owner: 'Moe',
    balance: 5000,
    transactions: [1000, -500, 2000],

    deposit: function (amount) {
        this.balance = this.balance + amount;
    },

    withdraw: function (amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
        } else {
            console.log("Insufficient funds.")
        }
    },

    showBalance: function () {
        console.log("Balance: R" + this.balance);
    }
}

account.deposit(1000);
account.showBalance();

account.withdraw(2000);
account.showBalance();
