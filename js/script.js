let energie = 50;
let faim = 50;
let plaisir = 50;
let stress = 50;
let title = document.querySelector('h1');
let alert = document.getElementById('alert');
let section = document.querySelector('section');
function Tamagochis () {
    this.confirm = document.getElementById('confirm');
    this.label = document.querySelector('label');
    this.eat = document.getElementById('eat');
    this.play = document.getElementById('play');
    this.sleep = document.getElementById('sleep');
    this.basic = document.getElementById('basic');
    this.normal = document.getElementById('normal');
    this.shower = document.getElementById('shower');
    this.input = document.querySelector('input');
    this.cat = document.getElementById('cat');
    this.allBtn = document.getElementById('all-btn');
    let h2 = document.createElement("h2");
    let header = document.querySelector('header');
    this.sleeping = function () {
        let value = document.getElementById('name').value;
        energie -= 10;
        document.getElementById("energie").textContent = energie;
        faim += 10;
        document.getElementById('faim').textContent = faim;
        chat.cat.setAttribute('src', 'img/cat-sleep.png');
        chat.sleep.disabled = faim >= 100;
        if (energie < 100){
            chat.eat.disabled = false;
        }
        if (faim >= 0){
            h2.remove();
            chat.eat.classList.remove("disabled");
        }
        if (faim === 0){
            alert.appendChild(h2);
            h2.innerHTML = value + " a le ventre rempli";
        }
        if (energie === 0) {
            alert.appendChild(h2);
            h2.innerHTML = value + " doit manger!";
            chat.play.disabled = true;
            chat.shower.disabled = true;
            chat.shower.classList.add('disabled');
            chat.play.classList.add('disabled');
            chat.sleep.classList.add('disabled');
        }
    }
    this.eating = function () {
        let value = document.getElementById('name').value;
        faim -= 10;
        document.getElementById('faim').textContent = faim;
        energie += 10;
        document.getElementById('energie').textContent = energie;
        chat.cat.setAttribute('src', 'img/cat-eat.png');
        chat.eat.disabled = 100 <= energie;
        if (faim === 0){
            chat.eat.classList.add("disabled");
            alert.appendChild(h2);
            h2.innerHTML = value + " à le ventre rempli";
        }
        if (faim < 100){
            chat.sleep.disabled = false;
        }
        if (energie >= 0 && stress !== 100 && faim !== 0){
            h2.remove();
            chat.shower.disabled = false;
            chat.shower.classList.remove('disabled')
            chat.sleep.classList.remove('disabled');
        }
        if (stress !== 0){
            chat.play.classList.remove('disabled');
            chat.play.disabled = false;
        }
    }
    this.playing = function () {
        let value = document.getElementById('name').value;
        plaisir += 10;
        document.getElementById('plaisir').textContent = plaisir;
        stress -= 10;
        document.getElementById('stress').textContent = stress;
        chat.cat.setAttribute('src', 'img/cat-play.png');
        chat.play.disabled = plaisir >= 100;
        if (stress === 0){
            chat.play.classList.add("disabled");
            alert.appendChild(h2);
            h2.innerHTML = value + " est complètement détendu.";
        }
        if (plaisir < 100){
            chat.shower.disabled = false;
        }
        if (plaisir >= 0 && faim !== 100 && stress !== 0){
            h2.remove();
            chat.sleep.disabled = false;
            chat.shower.classList.remove('disabled');
            chat.sleep.classList.remove('disabled');
        }
        if (faim !== 0){
            chat.eat.classList.remove('disabled');
            chat.eat.disabled = false;
        }
    }
    this.Shower = function () {
        let value = document.getElementById('name').value;
        stress += 10;
        document.getElementById('stress').textContent = stress;
        plaisir -= 10;
        document.getElementById('plaisir').textContent = plaisir;
        chat.cat.setAttribute('src', 'img/tooth-cat.png');
        chat.shower.disabled = stress >= 100;
        if (stress >= 0){
            chat.play.classList.remove("disabled");
            h2.remove();
        }
        if (stress < 100){
            chat.play.disabled = false;
        }
        if (plaisir === 0) {
            alert.appendChild(h2);
            h2.innerHTML = value + " se sent triste faites le jouer !";
            chat.eat.disabled = true;
            chat.sleep.disabled = true;
            chat.shower.classList.add('disabled');
            chat.eat.classList.add('disabled');
            chat.sleep.classList.add('disabled');
        }
    }
    this.register = function  () {
        let value = document.getElementById('name').value;
        if (value !== ''){
            title.innerHTML = 'Votre chat s\'appelle ' + value;
            chat.label.innerHTML = 'Vous avez choisi comme nom :';
            chat.confirm.remove();
            chat.cat.classList.remove('none');
            chat.allBtn.classList.remove('none');
            chat.allBtn.classList.add('flex');
            section.classList.remove('none');
            chat.normal.classList.remove('none');
            chat.normal.classList.add('j-center');
        }
    }
    this.basicForm = function () {
        chat.cat.setAttribute('src', 'img/normal.png');
        stress = 50;
        document.getElementById('stress').textContent = stress;
        energie = 50;
        document.getElementById('energie').textContent = energie;
        plaisir = 50;
        document.getElementById('plaisir').textContent = plaisir;
        faim = 50;
        document.getElementById('faim').textContent = faim;
        h2.remove();
        chat.shower.classList.remove('disabled');
        chat.eat.classList.remove('disabled');
        chat.sleep.classList.remove('disabled');
        chat.play.classList.remove('disabled');
        chat.eat.disabled = false;
        chat.sleep.disabled = false;
        chat.play.disabled = false;
        chat.shower.disabled = false;
    }
}
let chat = new Tamagochis();
chat.confirm.addEventListener('click', chat.register);
chat.input.addEventListener('keydown', function (event){
    if (event.code === 'Enter'){
        chat.register();
    }
});
chat.basic.addEventListener('click', chat.basicForm);
chat.shower.addEventListener('click', chat.Shower);
chat.sleep.addEventListener('click', chat.sleeping);
chat.eat.addEventListener('click', chat.eating);
chat.play.addEventListener('click', chat.playing);