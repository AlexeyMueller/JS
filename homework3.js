/*var name = "number" +3+3
console.log(name)
 Відповідь : number33.
 Це конкатенація. Тільки я не розумію, що ми не додаємо 3+3.
 */

/*var result = null + 3
console.log(result)
Відповідь : 3.
Ми до трьох додаємо нуль, що є відсутність значення, і отримаємо 3.*/

/*var name2 = 5 && "qwerty"
console.log(name2)
Відповідь : qwerty
Ми маємо справу з оператором "І". В данному випидку у нас повний цикл
Ми проходимо п'ятірку, бо це true значення, і доходимо до string qwerty яка теж є позитивним значенням,' +
'і нам видається останнє позитивне значення*/

/*var issue = +'40' + +'2' + "hillel";
console.log(issue)
Відповідь : 42hillel
Не розумію дію*/

/*var sum = '10' - 5 === 6
console.log(sum)
Відповідь : false
У данному випадку ми використовуємо оператор строгої рівності
Стрінга мінус число буде - 5 бо JS перетворює стрінгу на число
5 не дорівнує 6 тому false*/

/*var point = true + false
console.log(point)
Відповідь : 1.
True має значення 1, false 0. 1+0 дорівнює 1.*/

/*var name3 = '4px' - 3
console.log(name2)
Відповідь : NaN
Ми проводимо операції над різними типами даних String Number, тому отримаємо NaN*/

/*var point2 = '4' - 3
console.log(point2)
Відповідь: 1
В данному випадку у нас знову перетворення одного типу даних на інший - приведення типів*/

/*Максиме, Чому '4' - 3 - це приведення типів, а '4px' - 3 - не має сенсу, бо різні виді даних
Але ж у цьому випадку ми можемо теж приведення типів зробити. Чи це тому, що там 4 стоїть разом з літерами?*/

/*var sum2 = '6' + 3 ** 0
console.log(sum2)
Відповідь: 61
С початку ми приводимо 3 до нульової ступені. Будь-яке число у нульовій ступені це 1 (не знаю, чому так, але такі правила)
Потім ми виконуємо string concatenation*/

/*var issue2 = 12 / '6'
console.log(issue2)
Відповідь: 2
У нас тут приведення типів, тому 6 стала числом*/

/*var result2 = '10' + (5 === 6)
console.log(result2)
Відповідь: 10false
Спочатку ми виконуємо дію у дужках, де у нас строге порівняння
5 не дорівнює 6, тому false
Потім виконується string concatenation
Чесно кажучи, я думав, що false перетвореться на 0, і ми отримаємо у відповіді 100*/

/*var empty = null == ''
console.log(empty)
Відповідь : false
Це завдання цікаве: null та " " (пуста строка) завжди дорівнюють false
Тому я очікував що false дорівнюматиме false, що є true
Але ні. Можеш пояснити чому?*/

/*var action = 3 ** (9 / 3)
console.log(action)
Відповідь : 27
Виконуємо дію у дужках і отримаємо 3
Потім 3 виводимо у третю ступінь*/

/*var task = !!'false' == !!'true'
console.log(task)
Відповідь : false
Ми використовуємо логічній оператор НІ. 2 НІ значать ТАК
тобто ми порівнюємо стрінгу false зі стрінгою true і отримуємо false*/

/*var action2 = 0 || '0' && 1
console.log(action2)
Відповідь : 1
Ми використвуємо булеві оператори АБО та І, тому не розумію, чому відповідь 1, а не true чи false
Взагалі не бачу тут ніякої дії: ми просто пишемо 0 або 0 стрінга та 1. Щось дивне
Але 1 ми вже виводимо як останнє обчисленне значення*/

/*var task2 = (+null == false) < 1
console.log(task2)
Відповідь : false
У дужках ми приводимо до числа null, що буде 0, та порівнюємо 0 з false, яке теж є 0
Тому я не розумію, чому 0 менше 1*/

/*var task3 = false && true || true
console.log(task3)
Відповідь : true
Видає нам true, тому що один з двох операндів є
В нашому випадку у нас є операнд true */

/*var example = false && (false || true)
console.log(example)
Відповідь : false
Перша дія в дужках, і там ми отримаємо відповідь true
Але наступний оператор каже, що ми отримаємо true, тільки якщо обидва операнди є true, але це не так*/


/*var example2 = (+null == false) < 1 ** 5
console.log(example2)
Відповідь : false
Спочатку ми виконуємо дію у дужках, де приводимо null до числа
Тобто ми порівнюємо 0 з 0, бо false є 0.
Потім ми приводимо 1 у 5 ступінь, що дорівнює 1
А потім знову те саме що і у завданні на 94 рядку. Не розумію*/