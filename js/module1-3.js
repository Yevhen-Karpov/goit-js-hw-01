//Скрипт обработки покупки в магазине

/* let balance = 10000;
const payment = 20000;
console.log(`Сумма заказа составила ${payment} кредитов. Проверяем наличие средств на счете.`);
if (payment <= balance ) {
    balance -= payment;
    console.log(`На счету осталось ${balance} кредитов`);
} else {
    console.log(`На счету недостаточно денег для проведения операции`);
}
console.log(`Операция завершена`); */

//Скрипт подсчета суммы покупки со скидкой

/*const totalSpent = 20;
let payment = 500;
let discount = 0;
 
if (totalSpent >= 100 && totalSpent < 1000) {
    console.log(`Бронзовый партнер, скидка 2%`);
    discount = 0.02;
}
else if (totalSpent >=1000 && totalSpent < 5000) {
    console.log(`Серебряный партнер, скидка 5%`);
    discount = 0.05;
}
else if (totalSpent >= 5000) {
    console.log(`Золотой партнер, скидка 10%`);
    discount = 0.1;

}
else {
    console.log(`Совсем не партнер, фиг тебе скидка`);
    
}
payment -=payment * discount;
console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);
totalSpent +=  payment;
console.log(`Общая сумма покупок составляет ${totalSpent}`);*/

const btnAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]')
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');

let total = 0;

btnAdd.addEventListener('click', function () {
    console.log("click hehe");

    const value = Number(valueInput.value);

    console.log(value);

    total += value;
    outputEl.textContent = total;

    valueInput.value = '';
});

resetBtn.addEventListener('click', function () {
    total = 0;
    outputEl.textContent = total;
});

// =======================================
// функция фильтр
const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
        }
    }
    return filteredArray;
};

const callback1 = value => value >= 3;

const callback2 = value => value <= 4;

const callback3 = fruit => fruit.quantity >= 120;

const fnA = function (parameter) {
    const innerVariable = " jhnfsknbk";

    const innerFunction = function () {
        console.log("object");
    };
    return innerFunction;
};

// поваренок ==================================
const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} готовит ${dish}`);
    };
    return makeDish;
};

// округление числа ===============================
const rounder = function (plases) {
    return function (number) {
        return Number(number.toFixed(plases));
    };
};
const rounder2 = rounder(2);
const rounder3 = rounder(3);

// скрыть зарплату=======
const salaryManagerFactory = function (employeeName, baseSalary) {
    let salary = baseSalary;

    // const changeBy = function (amount) {
    //     salary += amount;
    // };

    return {
    raise(amount) {
        salary += amount;
    },
    lower(amount) {
        salary -= amount;
    },
    current() {
        return `Текущая зарплата ${employeeName} - ${salary}`;
    },

    };
};