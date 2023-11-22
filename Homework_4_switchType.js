/*var age = prompt("Вкажіть ваш вік","")

if (age == 1 || age == 21 || age == 31 || age == 41 || age == 51 || age == 61 || age == 71 || age == 81 || age == 91 || age == 101) {
    alert('Вам ' + age + ' рік');
} else if (age >= 2 && age <= 4 || age >= 22 && age <= 24 || age >= 32 && age <= 34 || age >= 42 && age <= 44 || age >= 52 && age <= 54 || age >= 62 && age <= 64 || age >= 72 && age <= 74 || age >= 82 && age <= 84 || age >= 92 && age <= 94 || age >= 102 && age <= 104) {
    alert('Вам ' + age + ' роки');
}   else if (age >= 5 && age <= 20 || age >= 25 && age <= 30 || age >= 35 && age <= 40 || age >= 45 && age <= 50 || age >= 55 && age <= 60 || age >= 65 && age <= 70 || age >= 75 && age <= 80 || age >= 85 && age <= 90 || age >= 95 && age <= 100) {
alert('Вам ' + age + ' років')
} else if (age === "") {
    alert('Ви не ввели вік')
} else if (age <1 ) {
    alert('Введіть вік правильно') *\
}

/*чесно кажучи, цей варіант рішення я підгледів, бо мені в голову не прийшло, що таке полотно тексту треба виводити.
Тому оцінку можеш взагалі не ставити, бо це не моя робота.
Мені хочеться вірити, що є щось коротше.
 */

let age = Number(prompt("Вкажіть ваш вік"));
switch (age) {
     case 1:
        x = age <0;
        alert (x + " це від'ємне число")
         break;
    case 2:
        x2 = age >= 10 && age <= 20;
        alert(age + " років");
        break;
    case 3:
        x3 = age % 10 === 1
        alert (age + " рік");
        break;
    case 4:
         x4 = age % 10 >= 2
        alert(age + " роки");
        break;
    default:
        alert(age + " років");

}