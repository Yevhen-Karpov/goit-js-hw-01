// class Constructor {
//     // тут создаем свойства
//     constructor(prop1 = 0, prop2 = 1) {
//         this.prop1 = prop1
//         this.prop2 = prop2
//     }
//     // тут добавляем методы
//     method1() {
//         console.log(this.prop1);
//     }
//     method2() {
//         return (this.prop2 = value)
//     }
// }
// // const newObj = new Constructor()

// class User {
//     constructor(login, password) {
//         this.login = login;
//         this.password = password;
//     }
//     showLogin() {
//             console.log(this.login);
//         };
    
//     showPassword() {
//         console.log(this.password);
//     }
// }

// const user1 = new User('user', 'gvidjkfnvkdlf')
// console.log(user1);
// // console.log(User.prototype);

// //       НОВАЯ ФУНКЦИЯ НА БАЗЕ ИСХОДНОЙ

// class NewUser extends User {
//     constructor(name, age, login, password) {
//         super(login, password);
//         this.name = name;
//         this.age = age;
//     }
//     updateAge () {
//         return (this.age += 1)
//     }
// }
// const newUser1 = new NewUser('Igor', 17, 'new user1', 'kjbihfd')
// console.log(newUser1);
// console.log(newUser1.updateAge());

//  Перезаписываем prototype новой функции и привязываем
//  в него prototype из исходной функции
// NewUser.prototype = Object.create(User.prototype)
// NewUser.prototype.constructor = NewUser

//  Добавляем новые методы в prototype новой функции

// NewUser.prototype.updateAge = function () {
//     return (this.age += 1)
// }

//    Создаем экземпляр из новой функции


// newUser1.showLogin()
// newUser1.showPassword()
// console.log(newUser1.updateAge());
// console.log(newUser1.updateAge());

// ==========================ПРАКТИКА===================================
// =================================1st===================

// function Post(title = 'title', text = 'Loren ipsum...') {
//     this.title = title
//     this.text = text
// }
// Post.prototype.updateTitle = function (value) {
//     return (this.title = value)
// }

// const post1 = new Post()
// console.log(post1)

// // ========================2nd========================

// function NewPost(imageUrl, title, text) {
//     Post.apply(this, [title, text])
//     this.image = imageUrl
// }
// console.log(NewPost.prototype);
// NewPost.prototype = Object.create(Post.prototype)
// NewPost.prototype.constructor = NewPost

// NewPost.prototype.updateImage = function (url) {
//     return (this.image = url)
// }

// const newPost1 = new NewPost(
    
//     'https://pixabay.com/ru/photos/%d1%81%d0%bb%d1%83%d1%87%d0%b0%d0%b9%d0%bd%d0%be%d0%b5-%d1%81%d0%ba%d0%be%d0%bb%d1%8c%d0%b6%d0%b5%d0%bd%d0%b8%d0%b5-%d0%be%d0%b9-542551/'
// )
// console.log(newPost1);

// // ==========================3rd=======================

// function BestPost(author, imageUrl, title, text) {
//     NewPost.call(this, imageUrl, title, text)
//     this.author = author
// }
// BestPost.prototype = Object.create(NewPost.prototype)
// BestPost.prototype.constructor = BestPost

// BestPost.prototype.showAutor = function () {
//     console.log(this.author);
// }

// const bestPost1 = new BestPost('Anatoliy', '')
// console.log(bestPost1);
// bestPost1.showAutor()
// bestPost1.updateImage('https://')
// bestPost1.updateTitle('juhjfk nihjoifd')

// class BaseProduct {
//     constructor(title, price, category) {
//         this._title = title
//         this._price = price
//         this.category = category
//     }
//     get price() {
//         return this._price
//     }
//     set price(value) {
//         return (this._price = value)
//     }
//     get title() {
//         return this._title
//     }
//     set title(value) {
//         return (this._title = value)
//     }
// }

// class WeigthProduct extends BaseProduct {
//     constructor(weigth, title, price, category) {
//         super(title, price, category)
//         this.weigth = weigth
//     }
//     getTotalCost() {
//         console.log(this.weigth * this._price);
//     }

//     decrWeigth(value) {
//        return  this.weigth - value <= 0 ? 'Товара недостаточно' : (this.weigth -= value)
            
//     }
//     incWeigth(value) {
//         console.log('после прихода товара', (this.weigth += value));
//         return (this.weigth += value)
//     }
// }
// const weigthProduct = new WeigthProduct(2.5, 'lemon', 30, 'fruits')
// // 
// class CountProduct extends BaseProduct {
//     constructor(count, title, price, category) {
//         super(title, price, category)
//         this.count = count
//     }
//     getTotalCost() {
//         console.log(this.count * this._price);
//     }
//     decCount(value) {
//        return this.count - value < 0 ? 'No' : (this.count -= value)
//     }    

//     incCount(value) {
//         return (this.count += value)
//     }
// }

// const countProduct = new CountProduct(100, 'snickers', 25, 'sweets')
// countProduct.getTotalCost()
// console.log('Остаток:', countProduct.decCount(10));
// console.log('после прихода товара:', countProduct.incCount(200))
// const baseProduct = new BaseProduct('Banana', 25)
// console.log(baseProduct);
// baseProduct.price = 36
// baseProduct.title = 'Orange'

// class Comment {
//     static name = 'Anonim'
//     static showName() {
//         console.log(this.name);
//     }
//     constructor(author, text) {
//         this.author = author
//         this.text = text
//     }
// }
// const comment1 = new Comment('Pushkin', 'kjnln jnmnjbh mcnhyy')
// console.log(comment1);
// console.log(comment1.author);
// console.log(comment1.text);

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//   const newNumbers = [];
//     numbers.forEach (number => {
//       if (number % 2 === 0) {
//         newNumbers.push(number + value);
//       } else {
//       newNumbers.push(number)
//       }
//     });
//           return newNumbers;           
//     // Пиши код выше этой строки
//   };
//     // Пиши код выше этой строки
// changeEven([1, 2, 3, 4, 5], 10);
    
// cons

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books].filter((book) => book.rating > MIN_BOOK_RATING)
.map(book => book.author)
  .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));

  const getNamesSortedByFriendCount = users => [...users].sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
  .map((user) => user.name);

  const getSortedFriends = users => [...users].flatMap(user => user.friends)
.filter((user, index, friends) => friends.indexOf(user) === index)
  .sort((firstFriend, secondFriend) => firstFriend.localeCompare(secondFriend));

const getTotalBalanceByGender = (users, gender) => [...users].flatMap(user => user.gender)
.filter(user => user.gender === gender)
.reduce((totalBalance, user) => totalBalance + user.balance, 0);