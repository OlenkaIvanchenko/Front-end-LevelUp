// Завдання 1
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Дані завантажено"), 1000);
    });
  }
  
async function displayData() {
    const data = await fetchData();
    console.log(data); // Очікується: "Дані завантажено"
}
//displayData();

// Завдання 2
// Напишіть функцію retryFetch, яка отримує на вхід функцію для отримання даних fetchData та кількість спроб retries. Функція повинна виконати fetchData. Якщо вона завершується помилкою (reject), функція повинна повторити запит до тих пір, поки не вичерпається кількість спроб.
function fetchData() {
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.7; 
      setTimeout(() => (success ? resolve("Дані отримано") : reject("Помилка")), 500);
    });
  }
  
  function retryFetch(fetchData, retries) {
    return new Promise((resolve, reject) => {
      // Викликаємо fetchData
      fetchData()
        .then(resolve) // Якщо успішно, викликаємо resolve з результатом
        .catch((error) => {
          if (retries > 0) {
            console.log(`Спроба не вдалася. Залишилося спроб: ${retries}`);
            // Якщо є спроби, викликаємо retryFetch з меншим числом спроб
            retryFetch(fetchData, retries - 1).then(resolve).catch(reject);
          } else {
            // Якщо спроб більше немає, повертаємо помилку
            reject(error);
          }
        });
    });
  }
  
  
  retryFetch(fetchData, 3)
    .then((data) => console.log(data))
    .catch((err) => console.error("Не вдалося отримати дані:", err));

// Завдання 3
// Напишіть функцію calculateTotal, яка використовує reduce для обчислення загальної суми замовлення. Кожен елемент — це об'єкт із полями name, price, quantity.

const cart = [
    { name: "Телефон", price: 700, quantity: 1 },
    { name: "Ноутбук", price: 1500, quantity: 2 },
    { name: "Мишка", price: 50, quantity: 3 },
];
  
function calculateTotal(cart) {
    const sumObject = cart.reduce(
        function (sum, cartItem) {
            return sum + cartItem.price * cartItem.quantity
        }, 0
    )
    return sumObject;
}
  
console.log(calculateTotal(cart)); // Очікується: 3850

// Завдання:
// Є функція mergeObjects, яка приймає два об'єкти та об'єднує їх. Знайдіть помилку в коді та виправте її.

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = mergeObjects(obj1, obj2);

console.log(merged); // Очікується: { a: 1, b: 3, c: 4 }
console.log(obj1);   // Очікується: { a: 1, b: 2 } (не має змінюватися)