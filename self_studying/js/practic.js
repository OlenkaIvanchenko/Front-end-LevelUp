
// рандомні цифри можуть повторюватись
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(getRandomNumber(20, 30));
//console.log(getRandomNumber(20, 50));
// const RandomNumbers = [];

// for (let i = 0; i < 10; i++) {
//     const number = getRandomNumber(20, 30);
//     RandomNumbers.push(number);
// }

// console.log(RandomNumbers);

// рандом без повторення

const uniqueNumbers = [];

while (uniqueNumbers.length < 10) {
    const number = getRandomNumber(1, 100)
    // перевірка на унвкальність - includes
    if (!uniqueNumbers.includes(number)) {
    // Якщо унікальне, додаємо в масив - push
        uniqueNumbers.push(number);
    }
}
console.log(uniqueNumbers);

//                  Завдання 1: Генерація випадкового кольору
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);

    // перетворення чисел в 16 рядковий формат:
    const red = r.toString(16).padStart(2, '0');
    const blue = b.toString(16).padStart(2, '0');
    const green = g.toString(16).padStart(2, '0');

    // повернення кольору у форматі #RRGGBB
    return `#${red}${blue}${green}`;
}

console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());

function generateColorsArrey(n) {
    const colors = [];
    for (let i = 0; i < n; i++) {
        colors.push(getRandomColor());
    }
    return colors;
}

// генеруємо 10 кольорів

const randomColors = generateColorsArrey(10);
console.log(randomColors);



//                  Завдання 2: Випадковий вибір значення
function randomeChoice(Array) {
    //генерація випадкового індексу
    const randomeIndex = Math.floor(Math.random() * Array.length);
    //повернення елементу масиву за цим індексом
    return Array[randomeIndex];
}

const fruits = ['apple', 'banana', 'cherry', 'date', 'grape'];

console.log(randomeChoice(fruits));
console.log(randomeChoice(fruits));

//                  Завдання 3: Випадковий масив чисел

function generateRandomArrey(n, min, max) {
    const RandomNumbers = [];
    for (let i = 0; i < n; i++){
        const RandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        RandomNumbers.push(RandomNumber);
    }
    return RandomNumbers;
}
console.log(generateRandomArrey(7, 1, 100));

//                  Завдання 4: Округлення випадкових чисел

function getNumberRandom() {
    return Math.random() * 100;
}

for (let i = 0; i < 5; i++) {
    const num = getNumberRandom();
    console.log(`Число: ${num}`);
    // Math.ceil(num) — округлення вгору. Math.floor(num) — округлення вниз. Math.round(num) — округлення до найближчого цілого.
    console.log(`Ceil: ${Math.ceil(num)}, Floor: ${Math.floor(num)}, Round: ${Math.round(num)}`);
    console.log('***');
}



//                  Завдання 5: Сортування масиву за випадковим порядком

const numbers = [1, 2, 3, 4, 5];

function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

console.log(shuffleArray(numbers));