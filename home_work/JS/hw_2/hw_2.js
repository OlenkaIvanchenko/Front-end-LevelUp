function showDistance(speed, time) {
    console.log(speed * time);
}

showDistance(10, 2);
showDistance(11, 5);
showDistance(12, 8);
showDistance(10, 2);
showDistance(12, 3);
showDistance(10, 2);

// простий калькулятор
// eval - проводить арифметичні дії зі строкою https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/eval
function calculate(a, b, operator) {
    console.log(eval(a + operator + b));
}

calculate(2, 3, "+");
calculate(2, 3, "-");
calculate(2, 3, "*");
calculate(35, 2, "/");

// Функція з перевіркою оператора
function calculate(a, b, operator) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log("Уведіть числові значення");
        return;
    } if (operator === "/" || operator === "+" || operator === "-" || operator === "*") {
        console.log(eval(a + operator + b));
    } else {
        console.log("неможливо виконати дію, передайте коректне значення");
    }    
}

calculate("jhjkh", 3, "a");
calculate(2, 3, "cgjvfhj");
calculate(2, 6, "+");
calculate(35, 2, "/");

// Калькулятор з інтерфейсом
function promptCalculate(a, b, operator) {
    a = parseFloat(a); // Приймає строку в якості аргументу і повертає дечятичне число (число з плаваючою крапкою)
    b = parseFloat(b);
    // перевірка, чи уведені числові значення
    if (isNaN(a) || isNaN(b)) {
        alert("Уведіть числові значення");
        return;
    }
    if (operator === "/" || operator === "+" || operator === "-" || operator === "*") {
        result = eval(a + operator + b); 
        alert(result);
    } else {
        alert("Неможливо виконати дію, передайте коректні значення");
    }
}

// let a = prompt("Уведіть 1 число", " ");
// let b = prompt("Уведіть число 2", " ");
// let operator = prompt("Вкажіть дію: +, -, /, *");
//promptCalculate(a, b, operator);

// Калькулятор для масиву
function arrayCalculator(array, operator) {
    if (operator === "+") {
        let sum = 0;
        // for (ітератор = значення; умова; збільшення на 1)
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            console.log("Сума елементів масиву:")   
            }
        console.log(sum);
    } if (operator === "*") {
        let multiply = 1;
        for (let i = 0; i < array.length; i++) {
            multiply *= array[i]
            console.log("Добуток елементів масиву:")
        }
        console.log(multiply);
    }
}

const arr = [3, 2, 5, 6];
arrayCalculator(arr, "+"); // виклик ф-ї
arrayCalculator(arr, "*");

function arrayCalculatorPlus(array) {
    let sum = 0;
    // let element of array --- елемент з масиву
    for (let element of array) {
        sum += element;
        console.log("Сума елементів масиву:")   
        }
    console.log(sum);
}

arrayCalculatorPlus(arr);



// Калькулятор з історією
const history = [];

function calculatorWithHistory(a, b, operator) {
    
    const result = eval(a + operator + b); // перетворення строки в арифметичну дію врезультаті якої отримуємо числове значення

    const operation = `${a} ${operator} ${b} = ${result}`; // для збереження вигляду виконуваних дій

    history.push(operation); // додавання дій до масиву історії 

    console.log(result);
    
}

calculatorWithHistory(2, 3, "+");
calculatorWithHistory(2, 3, "-");
calculatorWithHistory(2, 3, "*");
calculatorWithHistory(35, 2, "/");
calculatorWithHistory(2, 3, "+");
calculatorWithHistory(4545, 3, "-");
calculatorWithHistory(2, 2455, "*");
calculatorWithHistory(24545, 24542, "/");

console.log("Історія обчислень:", history);



// Цикли:
// 1. Виведення чисел у діапазоні:Напишіть програму, яка виводить усі числа від 1 до 100, що діляться на 5 без залишку, використовуючи цикл for.


for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0){
        console.log(i);
    }
}

// Просте число:
// Напишіть функцію isPrime(n), яка визначає, чи є число простим. Використайте цикл для перевірки дільників.
function isPrime(n) {
    for ( let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        } 
    }
    return n > 1;
}
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(9));
console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(25));
console.log(isPrime(23));
console.log(isPrime(72));
console.log(isPrime(283));




// Задача з ялинкою
// Напишіть програму, яка малює ялинку висотою n (введення користувачем). Використовуйте цикл у циклі для побудови рядів із пробілами та зірочками

function drawChristmasTree(n) {
    var i = 0,
        j = 0;
    
    var number = n;
    var space = "",
        star = "";

    while (i < number) {
        space = "";
        star = "";
        for (j = 0; j < number - i; j++) space += " ";
        for (j = 0; j < 2 * i + 1; j++) star += "*";
        console.log(space + star);
        i++;
    }
}

drawChristmasTree(3);



// Шахова дошка
// Напишіть програму, яка малює шахову дошку розміром n x n. Використовуйте цикл у циклі, щоб вивести чорні (#) і білі ( ) клітинки, наприклад:

function chessDesk(n) {

    const BLACK = "#"
    const WHITE = " "

    let res = ""

    for (let q=0; q<n; ++q) {
    let line = ""
    
    for (let w=0; w<n; ++w) {
        line += q+w & 1 ? BLACK : WHITE
    }
    
    res += line + "\n"
    }

    console.log(res)
}

chessDesk(10);