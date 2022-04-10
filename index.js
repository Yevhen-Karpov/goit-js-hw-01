//import "./js/module1-1.js"
//import "./js/module1-2.js"
//import "./js/module1-3.js"
// import "./js/module-math1-1.js"
// import "./js/module5.js"
// import "./js/module6.js"
// import "./js/test.js";
// const person = {
//   firstName: "bob",
//   showName() {
//     console.log(this.firstName);
//   },
// };

// const foo = function (callback) {
//   callback();
// };

// foo(person.showName);

function arraySum(array) {
  let sum = null;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

const chooseOptimalDistance = (t, k, ls) => {
  let arr = [];
  while (arr.length < k && ls.length >= k) {
    const rand = Math.floor(Math.random() * ls.length);
    const value = ls[rand];

    if (!arr.includes(value)) {
      arr.push(value);
    }
    console.log(arr);
  }

  const result = arraySum(arr);
  if (result <= t) {
    return result;
  }
  return null;
};

// ;
console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173
// console.log(chooseOptimalDistance(163, 2, [50])); // null
