/*Напишіть програму яка буде приймати два значення, перше це одиниця вимірювання (кілометри, години та кілограми),
друге значення це кількість, а потім переводити ці значення:

Кілометри в метри
години в хвилини
Кілограми в грами
Зробити вивід отриманої інформації у вигляді - 10 км це 10000 м. 1 г це 60хв. 1 кг. це 1000 грм.

    Умови виконання ДЗ

В задачі не обовязково використовувати prompt, просто запишіть значення в зміні
Обовязково при написані завдання використовуйте switch
Продумати варіант якщо буде введена якась інша одиниця виміру
Мудрувати та створювати валідацію не потрібно
console.log(typeof name, Number(name));*


let kilom = 10
let hour = 1
let kilograms = 1
switch (hour, kilograms, kilom) {
    case kilom:
    meters = kilom * 1000;
    console.log(kilom+"km" + " " + "це" + " " + meters +"m")
    case hour:
    minutes = hour * 60;
        console.log(hour+"h" + " " + "це" + " " + minutes +"min")
    case kilograms:
    gramm = kilograms * 1000;
        console.log(kilograms+"kg" + " " + "це" + " " + gramm +"g")
    default:
        console.log("ми не підтримуємо цю одинцю виміру")

}
*/
let measurement = Number(prompt("Вкажіть одиницю виміру"));
switch (measurement) {
    case measurement:
        meters = measurement * 1000;
        alert(measurement+"km" + " " + "це" + " " + meters +"m")
    case "hour":
        minutes = measurement * 60;
        alert(measurement+"h" + " " + "це" + " " + minutes +"min")
    case "kilograms":
        gramm = measurement * 1000;
        alert(measurement+"kg" + " " + "це" + " " + gramm +"g")
    default:
        alert("ми не підтримуємо цю одинцю виміру")
}