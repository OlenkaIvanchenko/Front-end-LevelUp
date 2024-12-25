// Завдання 1:
// Створіть змінну name і присвойте їй ваше ім'я.
// Створіть змінну age і присвойте їй ваш вік.
// Виведіть ці змінні в консоль.
// Завдання 2:
// Створіть дві змінні з рядками і об'єднайте їх.
// Завдання 3:
// Створіть дві числові змінні і виконайте з ними арифметичні операції (додавання, віднімання, множення, ділення).
// Завдання 4:
// Створіть змінну з рядковим значенням, яке містить число.
// Перетворіть цей рядок в число і виведіть результат у консоль.
// Завдання 5:
// Створіть змінну з рядковим значенням і перетворіть її в булеве значення.
// Створіть змінну з числовим значенням і перетворіть її в булеве значення.
// *** знайти пояснення, чому typeof null - це object




// Завдання 1:
let name;
name = "Olena";
console.log(name);

let age;
age = 27;
console.log(age);

// Завдання 2:
let firstPart, secondPart, fullName;
firstPart = "United";
secondPart = "Kingdom";
fullName = firstPart + " " + secondPart; 
//fullName = `${firstPart} ${secondPart}`;
//fullName = firstPart.concat(" ", secondPart); - Метод concat
//fullName = [firstPart, secondPart].join(" "); - Метод join з масивами
console.log(fullName);

// Завдання 3:
let a = 12,
    b = 3;
console.log(a * b);
console.log(a / b);
console.log(a + b);
console.log(a - b);
console.log(a % b);
console.log(a * a - b / 2);

// Завдання 4:
let x;
x = "12";
x = +"12";
console.log(typeof x);

let y = "15";
let g = Number(y);
console.log(typeof g);

// Завдання 5:
let cat;
cat = "Nika";
cat = Boolean("Nika");
console.log(cat);

let age2;
age2 = 12;
age2 = Boolean(12);
console.log(age2);


// Тип null у JavaScript виводиться як object через історичну помилку, яку зберегли заради зворотної сумісності. Для точної перевірки краще використовувати === null. 
// Як перевіряти null коректно?
// Оскільки typeof null не може надати точну інформацію, краще використовувати:

// 1. Пряму перевірку:
// if (value === null) {
//   console.log("Це null");
// }

// 2. Метод Object.prototype.toString:
// console.log(Object.prototype.toString.call(null)); 
// // "[object Null]"
