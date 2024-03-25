// JavaScript Задача: Дешифратор Секретного Кода

// Представь, что ты шпион, который пытается раскодировать секретное сообщение. Твоя миссия - создать программу на JavaScript, которая может расшифровать зашифрованные сообщения. Вот задача:

// Задание: Напиши функцию на JavaScript, которая расшифровывает секретное сообщение в соответствии с заданным алгоритмом.

// Требования:

// Секретное сообщение должно быть зашифровано с использованием простого алгоритма, например, сдвиг каждой буквы на определенное количество позиций в алфавите.
// Функция должна принимать два параметра: зашифрованное сообщение и ключ дешифровки.
// Ключ дешифровки указывает, на сколько позиций была сдвинута каждая буква в сообщении.
// Функция должна возвращать расшифрованное сообщение в виде обычного текста.
// Пример:

// Зашифрованное сообщение: "Khoor, zruog!";
// Ключ Дешифровки: 3;
// Расшифрованное: "Hello, world!"
// Дополнительные Испытания:

// Реализуй обработку ошибок для недопустимых входных данных.
// Позволь функции обрабатывать как заглавные, так и строчные буквы.
// Добавь поддержку дешифровки сообщений, включающих цифры или специальные символы.

// function decodeMessage(encryptedMessage, key) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let decryptedMessage = "";

//   for (let i = 0; i < encryptedMessage.length; i++) {
//     const index = alphabet.indexOf(encryptedMessage[i].toLowerCase());

//     if (index < 0) {
//       decryptedMessage += encryptedMessage[i];
    
//     } else {
//       const sym = alphabet[index - key];
//       const newsym = encryptedMessage[i] ===encryptedMessage[i].toLowerCase() ? sym : sym.toUpperCase();

//       decryptedMessage += newsym;      
//     }

//   }

//   return decryptedMessage;
// }





// console.log(decodeMessage("Khoor, zruog!", 3));



// Создаем объект "корзина"
// let shoppingCart = {
//     items: [], // массив для хранения товаров в корзине

//     // Метод для добавления товара в корзину
//     addItem: function(product, quantity, price) {
//         this.items.push({
//             product: product,
//             quantity: quantity,
//             price: price
//         });
//         console.log(product + " добавлен в корзину.");
//     },

//     // Метод для удаления товара из корзины
//     removeItem: function(product) {
//         let index = this.items.findIndex(item => item.product === product);
//         if (index !== -1) {
//             this.items.splice(index, 1);
//             console.log(product + " удален из корзины.");
//         } else {
//             console.log("Товар не найден в корзине.");
//         }
//     },

//     // Метод для изменения количества товара в корзине
//     updateQuantity: function(product, quantity) {
//         let item = this.items.find(item => item.product === product);
//         if (item) {
//             item.quantity = quantity;
//             console.log("Количество " + product + " обновлено в корзине.");
//         } else {
//             console.log("Товар не найден в корзине.");
//         }
//     },

//     // Метод для расчета общей суммы покупки
//     calculateTotal: function() {
//         let total = 0;
//         this.items.forEach(item => {
//             total += item.price * item.quantity;
//         });
//         return total;
//     },

//     // Метод для оформления заказа
//     checkout: function() {
//         console.log("Содержимое корзины:");
//         this.items.forEach(item => {
//             console.log(item.product + " - Количество: " + item.quantity + " - Цена: " + item.price);
//         });
//         console.log("Общая сумма: " + this.calculateTotal());
//     }
// };

// // Пример использования
// shoppingCart.addItem("Футболка", 2, 20);
// shoppingCart.addItem("Джинсы", 1, 50);
// shoppingCart.addItem("Носки", 5, 5);

// shoppingCart.removeItem("Джинсы");

// shoppingCart.updateQuantity("Футболка", 3);

// shoppingCart.checkout();    



// let products = [
//     { name: "Футболка", category: "Одежда", price: 20, brand: "Nike", discount: true, rating: 4.5 },
//     { name: "Джинсы", category: "Одежда", price: 50, brand: "Levi's", discount: false, rating: 4.2 },
//     { name: "Кроссовки", category: "Обувь", price: 80, brand: "Adidas", discount: true, rating: 4.8 },
//     // Добавьте другие товары по аналогии
// ];

// // Функция фильтрации и сортировки товаров
// function filterProducts(products, filters) {
//     let filteredProducts = products.filter(product => {
//         // Проверяем соответствие критериям фильтрации
//         return (!filters.category || product.category === filters.category) &&
//                (!filters.brand || product.brand === filters.brand) &&
//                (!filters.price || (product.price >= filters.price.min && product.price <= filters.price.max)) &&
//                (!filters.discount || product.discount === filters.discount) &&
//                (!filters.rating || product.rating >= filters.rating);
//     });

//     // Сортировка
//     if (filters.sortBy) {
//         filteredProducts.sort((a, b) => {
//             if (a[filters.sortBy] < b[filters.sortBy]) return -1;
//             if (a[filters.sortBy] > b[filters.sortBy]) return 1;
//             return 0;
//         });
//     }

//     return filteredProducts;
// }

// // Пример использования
// let filters = {
//     category: "Одежда",
//     price: { min: 0, max: 30 },
//     brand: "Nike",
//     discount: true,
//     rating: 4,
//     sortBy: "price" // Может быть "price", "rating" или любое другое поле объекта товара
// };

// let filteredProducts = filterProducts(products, filters);
// console.log(filteredProducts);