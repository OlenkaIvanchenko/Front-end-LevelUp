//                  Завдання 1: Генерація випадкового кольору
// function getRandomColor() {
    // const r = Math.floor(Math.random() * 256);
    // const b = Math.floor(Math.random() * 256);
    // const g = Math.floor(Math.random() * 256);

    // // перетворення чисел в 16 рядковий формат:
    // const red = r.toString(16).padStart(2, '0');
    // const blue = b.toString(16).padStart(2, '0');
    // const green = g.toString(16).padStart(2, '0');

    // повернення кольору у форматі #RRGGBB
    //return `#${red}${blue}${green}`;
//}
// console.log(getRandomColor());
// console.log(getRandomColor());
// console.log(getRandomColor());


// function generateColorsArrey(n) {
//     const colors = [];
//     for (let i = 0; i < n; i++) {
//         colors.push(getRandomColor());
//     }
//     return colors;
// }
//Array.from({ length: n }, ...) створює масив з n елементів, для кожного з яких викликається функція getRandomColor() = return Array.from ({length: n}, () => getRandomColor());

// function getRandomColor() {
//     const getRandomValue = () => Math.floor(Math.random()*256).toString(16).padStart(2, '0');
//     return `#${getRandomValue()}${getRandomValue()}${getRandomValue()}`;
// }
// function generateColorArrey (n) {
//     return Array(n).fill(null).reduce((acc) => {
//         acc.push(getRandomColor());
//         return acc;
//     }, []);
// }
//                  Завдання 1: Генерація випадкового кольору
function getRandomColor() {
    let color = '#';
    for (let i = 0; i < 3; i++) {
        const randomValue = Math.floor(Math.random()*256).toString(16).padStart(2, '0');
        color += randomValue;
    }
    return color;
}
function generateColorArrey(n) {
    return Array.from({ length: n }, () => getRandomColor());
}


// генеруємо 10 кольорів

const randomColors = generateColorArrey(10);
console.log(randomColors);



//                  Завдання 2: Випадковий вибір значення
function randomeChoice(array) {
    //генерація випадкового індексу
    const randomeIndex = Math.floor(Math.random() * array.length);
    //повернення елементу масиву за цим індексом
    return array[randomeIndex];
}

const fruits = ['apple', 'banana', 'cherry', 'orange', 'grape'];

console.log(randomeChoice(fruits));
console.log(randomeChoice(fruits));

//                  Завдання 3: Випадковий масив чисел

function generateRandomArrey(n, min, max) {
    const randomNumbers = [];
    for (let i = 0; i < n; i++){
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
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