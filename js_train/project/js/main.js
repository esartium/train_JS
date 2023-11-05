document.write("bebebe");

function trainshowbase() {

    console.log("bababa");
    console.info("nnnn");
    console.error("ошибка !!!!!!");
    console.warn("варнинг");

var a;

a = 55;
var b = 100;

console.log(a);
console.log(b);
console.log(a+b);
console.log("Переменная: " + a);

const per = 10;

let w = 110;
console.log(w);

let res = w - a;
console.log(res);

console.log("Res:" + (w - a));

let per1 = 0;
per1 = per1 + 5;
let per2 = 0;
per2 += 5;

console.log("bebebe " + per1 + per2);

let str = "22222";
let str1 = "33";
let str2 = Number("22222");
let str3 = Number(str);

console.log("bababa" + str + str1);
console.log("bababa" + str2 + str3);
console.log("bababa" + (str + str1));
console.log("bababa" + (str2 + str3));


console.log(Math.E);
console.log(Math.sin(0));
console.log(Math.min(2, 4, 7, 1, -4, 100));
console.log(Math.max(2, 4, 7, 1, -4, 100));
}

function trainshowifelse() {
var f = "15";
var ff = 15;

if (f == ff) {
    console.log("a");
} else {
    console.log("aa");
}

if (f === ff) {
    console.log("A");
} else {
    console.log("AA");
}

var fff = 10;

if (f > fff) {
    console.log("ура");
} else {
    console.log("не ура");
}

if (f > fff || f === ff) {
    console.log("ы");
}

}

function trainshowmass() {

var mass = new Array(100, 200, 300);
var mass2 = [100, 200, 300];
let arr = new Array(100, 200, 300);
let arr2 = [100, 200, 300];

console.log("Массив через var и new Array: ")
for (let i = 0; i < 4; i++) {
    console.log(mass[i]);
}

console.log("Массив через var и []: ")
for (let i = 0; i < 4; i++) {
    console.log(mass2[i]);
}

console.log("Массив через let и new Array: ")
for (let i = 0; i < 4; i++) {
    console.log(mass[i]);
}

console.log("Массив через let и new []: ")
for (let i = 0; i < 4; i++) {
    console.log(arr2[i]);
}

console.log(" => визуально на простом примере никакой разницы");


let mnogomer = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(mass2);

console.log(arr2);

console.log(mnogomer);

}

function trainshowcycle() {

let j = 17;
while(j > 10) {
    console.log(j);
    j--;
}

let m = 177;
while(m > 18) {
    console.log(m);
    m-=17;
}

let n = 500;
do {
    console.log(n);
} while (n >= 1000);

}

function trainshowwindows() {

alert("бебебе");

confirm("ок или отмена?");

let data = confirm("ок или отмена?");
console.log(data);

prompt("введите что-то", "что-то");

let data2 = prompt("введите что-то", "что-то");
console.log(data2);

//Пример небольшой программы с окнами:
let x = null;
if(confirm("нажмите ок")) {
    x = prompt("введите имя");
    alert(x + " - лох хахаха");
} else {
    alert("ты че не понял");
}

}

function trainshowfunc() {

    var mass = new Array(100, 200, 300);
    var mass2 = [100, 200, 300];

let xx = 770;

var ddd;
function bebebe(ddd) {
    console.log("bebebe" + ddd);
}
ddd = xx;
bebebe(ddd);
ddd = 500;
bebebe(ddd);

function sum (c1, c2) {
    let res12 = c1 % c2;
    console.log(res12);
}
sum(10,5);

function summass (mass) {
    let sum = 0;
    for (var i = 0; i < mass.length; i++) {
        sum += mass[i];
    }
    console.log("сумма элементов массива: " + sum);
}

summass(mass);

// возвращение значений из функции:

function summass2 (mass2) {
    let sum2 = 0;
    for (var i = 0; i < mass2.length; i++) {
        sum2 += mass2[i];
    }
    return sum2;
} //не вывели на экран сразу, а вернули результат

let sum2res = summass2(mass2); //засунули результат в переменную
console.log(sum2res); //вывели переменную

}

function dblp() {
    alert("молодец");
}

function lovushka() {
    alert("хаха попался");
}

var sch = 0;

function kolvo_nazhatiy() {
    sch++;
    console.log("вы нажали на кнопку " + sch + " раз(а)");
}

function kolvo_nazhatiy2(button) {
    sch++;
    button.innerHTML = "вы нажали на кнопку " + sch + " раз(а)";

    button.style.background = "orange";
    button.style.color = "yellow";
    button.style.cssText = "font-size: 20px; color: yellow; background-color: orange";
}

function kolvo_nazhatiy3(element) {
    sch++;
    element.innerHTML = "вы нажали на штуку " + sch + " раз(а)";

    //вывод атрибутов объекта в консоль:
    console.log("onclick: " + element.onclick);
    console.log("name: " + element.name);
}

function input(inp) {
    console.log(inp.value);

    if (inp.value == "здарова") {
        alert("и тебе здарова");
    }
}

// ...





























