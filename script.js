// function HelloName(userName, surname, age) {
//     console.log(`Привет, ${userName} ${surname} с возрастом ${age}`);
// }

// HelloName('Иван', 'Петров', '17');



// let num = 5;

// function square(number) {
//     console.log(`Квадрат числа ${number} равен ${number ** 2}`);
// }

// square(num);


// let num2 = Number(prompt('Введите число'));
// function numberSign(num1) {
//     console.log(num1 > 0 ? "+++" : "---");
// }

// numberSign(num2);



// function summa(a, b, c) {
//     console.log(a + b + c);
// }
// summa(2, 3, 5);

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// summa(param1, param2, param3);

// function WeekDay(num) {
//     if (num === 1) {
//         console.log('Понедельник');
//     } else if (num === 2) {
//         console.log('Вторник');
//     } else if (num === 3) {
//         console.log('Среда');
//     } else if (num === 4) {
//         console.log('Четверг');
//     } else if (num === 5) {
//         console.log('Пятница');
//     } else if (num === 6) {
//         console.log('Суббота');
//     } else if (num === 7) {
//         console.log('Воскресенье');
//     } else {
//         console.log('Введенное число вне промежутка от 1 до 7');
//     }
// }

// WeekDay(3);

// var date = new Date();
// let message = "";
// function HelloNameTime(userName) {
//     let Hours = date.getHours();
//     if (Hours >= 0 && Hours < 5) {
//         message = "Доброй ночи";
//     }
//     else if (Hours >= 5 && Hours < 12) {
//         message = "Доброе утро";
//     }
//     else if (Hours >= 12 && Hours < 18) {
//         message = "Добрый день";
//     }
//     else {
//         message = "Добрый вечер";
//     }
//     console.log(message + ", " + userName);
// }
// let userName = prompt("Введите Ваше имя");
// HelloNameTime(userName);

// 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function Cube(number) {
    return (number ** 3);
}

let num1 = Cube(2);
let num2 = Cube(3);
console.log(num1 + num2);

// 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
const Salary = (money) => {
    return money * 0.87;
}
const userMoney = Number(prompt('Введите число (сумму зарплаты)'));
if (Number.isFinite(userMoney)) {
    console.log(Salary(userMoney));
} else {
    console.log("Значение задано не верно");
}

// 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const num3 = Number(prompt('Введите число 1'));
const num4 = Number(prompt('Введите число 2'));
const num5 = Number(prompt('Введите число 3'));

function MaxValue(num3, num4, num5) {
    max = Math.max(num3, num4, num5);
    return max;
}

console.log(MaxValue(num3, num4, num5));

// 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два
// числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
// сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите
// внимание на разность, функция должна вычесть из большего числа меньшее, либо
// вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
// не нужно.

function Amount(a, b) {
    console.log(a + b);
}
Amount(2, 3);

function Difference(a, b) {
    max = Math.max(a, b);
    min = Math.min(a, b);
    console.log(max - min);
}
Difference(5, 3);

function Composition(a, b) {
    console.log(a * b);
}

Composition(3, 5);

function Division(a, b) {
    console.log(a / b);
}

Division(10, 2);