// ДЗ 1
// Написати свою реалізацію функції isNaN.
//  Не використовувати isNaN/ Number.isNaN


let data = 10;
let words = "Hallo!";
switch (data) {
    case data:
        terss = data / "words";
        console.log(terss);
    case words:
        hey = words / "bridge"
        console.log(hey);

}

// ДЗ 2
//
// Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true),
// яка приймає чотири аргументи:
// - рядок, до якого буде додаватися символ.
// - символ, який буде додаватися.
// - Скільки додавати символів
// - булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
// - останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів,
// а ви вказуєте значення 6, то додаєте тільки один символ
//                                      Умови виконання ДЗ
//
// Функція повинна повертати новий рядок

function sentence () {
     console.log("wonderful".padStart(12,)); // Дивимось, що рядок рухається.
     console.log(("wonderful".padEnd(10, "*"))) // Додаємо символ на 10 місце в рядку
     console.log((" Wonderful".padStart(17, "Life is ")))// далі граємось

    var rnd = Math.random();
    rnd *= 10;
    console.log(rnd)
    if ( rnd === 0 ) {
        console.log((" True".padStart(10, "It is  ")))
    } else {
        console.log((" False".padEnd(12, " It is")))
    }
}
sentence();
// Не впевнений, що мені вдалось останню вимогу виконати.
// Тому я зробив умовний boolean, який у данному випадку повертає завжди false.  Авжеж, якщо зробити, що rnd !==0, то отримаємо true.
// А ще можна зробити так, щоб було true, коли rnd більше за "5", а false, коли нижче.

// ДЗ3
//
//     Умови виконання ДЗ
//
// Функція виводить інформацію
// Кількість згенерованих чисел: кількість чисел
// Парних чисел: кількість парних чисел
// Не парних чисел: кількість не парних чисел
// Відсоток парних до не парних:


function probability () {  // З цим завданням не справився зовсім. Тільки створив випадкові числа від 100 до 1000.
let min = 100;
let max = 1000;
let random = Math.floor(Math.random() * (max - min + 1) + min);
let random2 = Math.floor(Math.random() * (max - min + 1) + min);
let random3 = Math.floor(Math.random() * (max - min + 1) + min);
console.log(random)
console.log(random2)
console.log(random3)

}
probability()

