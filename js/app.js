//Комментарии такие же как и в css
    /* Это многострочный
    комментарий*/
    // Закомментить Ctrl + /
// Переменная

//alert('This is me, motherfuckers!');
/*let myAge;
myAge = 36; 

// Литерал - константа (число/текст)
let qwe;
let asd;

qwe = 5;
asd = 7;

let a, b, c;
a = b = c = 15;
let qwe = 5;
let asd = 7;   или так

console.log(qwe + asd);
console.log(a + asd, b);
console.log("a = ", a, ", ", "b = ", b);
console.log(console);
let a = 10;
console.log(a);
console.log(typeof a); //тип переменной (эта number)
let b = Infinity; //бесконечное значение (также -Infinity)
console.log(b);
console.log(typeof b);
// NaN  Not a Number - не число
// Экранирование - \ обратный слэш, один
// \n перенос на новую строку   \t табуляция 
// ${b}  - внедрение, строковой шаблон
// let a = null; пустое значение
// let a = undefined; 
let sym = Symbol();*/
// Объекты
// let car = {}; // Создали пустой объект
// let car = {
//     color: 'green',
//     maxSpeed: 250,
//     audio: {
//         brand: 'Sony',
//         speakers: 12
//     }
// };
// console.log(car.color);
// console.log(typeof car);
// console.log(car.color); //Вывести конкретное свойство
// car.color = 'red'; 
// console.log(car.color); 
// car['color'] = 'blue'; 
// console.log(car.color);
// //Без кавычек
// let carProp = 'color';
// car[carProp] = 'yellow';
// console.log(car.color);
// console.log(car.audio.spea);
// let carYellow = {
//         color: 'yellow',
//         mark: 'Ford'
//     };
// console.log(carYellow.color);
// let carRed = {
//     color: 'red',
//     mark: 'Ford'
// };
// console.log(carRed.color);
// carYellow.color = carRed.color;
// console.log(carYellow.color);
// function colorize(someColor = red) {
//     if (someColor == 'red') {return};
//     console.log (someColor);
// };
// firstColor = colorize;
// firstColor = colorize('green');
// firstColor = colorize('red');
// firstColor = colorize('cyan');

// let anon = function () {       //Анонимная функция присваивается переменной 
//     console.log ('Ya tut');
// };
// anon();
// console.log (typeof anon);    //Тип переменной function

// (function(){console.log ('Yo!');})();  //Анонимная функция

// setTimeout(function(){console.log ('Tormoz!');},1000);

// let anonim = () => console.log ('Ya strelo4naia');      //Стрелочная функция (запись)

// anonim();
// (() => console.log("мы стрелочная функция"))();
// let myCar = {
//     color: 'red',
//     drivers: ['Вася','Петя'],
//     getDriver: function(number){ console.log('Текущий водитель - ' + this.drivers[number])}
// };
// myCar.getDriver(1);
// function giveMoney(intro) {
//     money = intro;
//     if (money == 'USD') {
//         console.log(money + ' ' + '- это доллары');
//         return
//     }
//     else if (money == 'UAH') {
//             console.log(money + ' ' + '- это гривны');
//             return
//         }
//         else {console.log('Не принимаем')}
// };
// giveMoney('UAH');
// for (let i = 0; i <= 69; i++) {
//     console.log('The number is - '+ i);
// }
// let drivers = ['Дядя', 'Тётя', 'Дед'];
// for (let i = drivers.length; i > 0; i--) {
//         console.log('The driver is - '+ drivers[i-1]);
// }
// console.log(drivers);
// class Blogger {
//     constructor (firstName, lastName, channelName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.channelName = channelName;
//     }
//     sayName () {
//         console.log (`${this.firstName} ${this.lastName} ${this.channelName}`)
//     }
// }
// let blogger1 = new Blogger ('Дюша','Lev4a','Media');
// console.log('Канал '+ blogger1.channelName + ' [ ' + 'автор канала: ' + blogger1.firstName + ' ' + blogger1.lastName + ' ]');
// console.log('Секунду');
// blogger1.sayName();
// document.getElementById('header__catalog__head');
// console.log(document.getElementById('header__catalog__head'));
// console.log(typeof document.getElementById('header__catalog__head'));
// document.getElementById('header__catalog__head').innerText = 'ШМАТАЛОГ';
// let myElement = document.querySelector('.breaker__name');
// console.log(myElement);
// myElement.innerText = 'Yo!';
// let elementX = {
//     class: '.header__test',
//     value: 40
// };
// let myElement = document.querySelector(elementX.class);
// console.log(myElement);
// myElement.value = elementX.value;
// let my = null;
// console.log(typeof my);
// console.log(my);
let bmw = {
    year: 2010,
    acoustic: {
        name: 'sony',
        quantity: 10,
        bass: true,
        womenMagnet: 100500
    }
};
console.log(typeof bmw.acoustic.bass);
console.log(typeof bmw.acoustic.womenMagnet);
console.log(bmw);