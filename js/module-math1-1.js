// перебор массива с изменением
// const cart = [54, 28, 106, 70, 92, 120];
// let total = 0;
// for (let i = 0, i < cart.length, i +=1) {
//     cart[i] = Math.round(cart[i] * 1.2);
//     total += cart[i];
// }
// console.log('Total: ', total);
// //  простой перебор
// for (const value of cart) {
//     total += value;
// }

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   let totalPrice = 0;
//   totalPrice += message.split(' ').length * pricePerWord;
// return totalPrice;

//    // Change code above this line *
// }
// поиск наименьшего числа
// const numbers = [51, 18, 13, 38, 143, 3, 63, 7];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log('smallestNumber-', smallestNumber);

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// const messages = [];
// function composeMessage(position) {
// for (let i = 0; i < this.orders.length; i += 1) {
//   return `Готовим ${this.orders.dish[i]} для ${this.orders.email[i]}. Ваш заказ ${i + 1}-й в очереди.`;
// };
// };

function Storage(items) {
  this.items = [...items];
};
Storage.prototype.getItems = function (){
  return this.items;
};
Storage.prototype.addItem = function (newItem){
  this.items.push(newItem);
};
Storage.prototype.removeItem = function (item){
  this.items.splice(this.items.indexOf(item), 1);
};

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');


// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }
// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };
// StringBuilder.prototype.padEnd = function (str) {
//   this.value = this.value + str;
// };
// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };
// StringBuilder.prototype.padBoth = function (str) {
//   this.value = str + this.value + str
// };

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// class Storage {
//   #items
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   }
// }

// class StringBuilder {
//   #value
//   constructor(baseValue) {
//     this.#value = baseValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  updateModel(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}





