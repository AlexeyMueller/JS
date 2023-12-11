/*ДЗ2 Сума вартості послуг

Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"
};
"Послуги" можуть додаватися по ходу роботи:
   services['Розбити скло'] = "200 грн";
Умови виконання ДЗ
створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price */
// let services = {
//     haircut : 26,
//     shaving: 15,
//     manicure: 25,
//     totalPrice: function () {
//         console.log("General services price is" + " " + (services.haircut + services.shaving + services.manicure))
//         console.log("The lowest price is" + " " + Math.min(this.haircut, this.shaving, this.manicure))
//         console.log("The highest price is" + " " + Math.max(this.haircut, this.shaving, this.manicure))
//
// }
// }
// services.totalPrice()

/*ДЗ1

Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію).
Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення".
Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.

Наприклад так:

    obj.getInfo(); // Правильна інформація про об'єкт
obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.
Умови виконання ДЗ
*/
let house = {
    livingRoom: 22,
    bedroom1: 18,
    bedroom2: 18,


          houseTotal () {
        return "living room is " + (this.livingRoom) + " " + "bedroom one is" + " " + (this.bedroom1) + " " + "bedroom two is" + " " + (this.bedroom2)
            }
}
console.log (house.houseTotal())





