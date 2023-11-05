let blablabla = document.getElementById('blablabla');
console.log(blablabla.id);
blablabla.title = "bebebe";
blablabla.style.cssText = "color: yellow; background-color: orange; font-size:17px";
blablabla.innerHTML = "a<br>b<br>c";

document.getElementById('blablabla').innerHTML = "a<br>b<br>c<br>d";

let spans = document.getElementsByTagName('span');
for (let i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}

let spans2 = document.getElementsByClassName('be');
for (let i = 0; i < spans2.length; i++) {
    console.log(spans2[i].innerHTML);
}

document.getElementById('main-form').addEventListener("submit", checkForm);
function checkForm(event) {
    event.preventDefault(); //отключаем стандартное поведение, то есть перехагрузку страницы
    let mainForm = document.getElementsById('main-form');
    console.log("форма заполнена");

    let name = mainForm.name.value;
    let password = mainForm.pass.value;
    let repass = mainForm.repass.value;
    let gender = mainForm.state.value;
    console.log(name + ", " + password + ", " + repass + ", " + gender)

    return false;
}


function anwind(knopka) {
    window.location = 'index2.html';
}













