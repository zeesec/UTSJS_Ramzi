const body = document.body;
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const newText = document.createElement('h1');
newText.textContent = 'Berhasil !!';
const newText1 = document.createElement('h2');
newText1.textContent = 'X RPL Merah'
const newText2 = document.createElement('h2');
newText2.textContent = 'X RPL Hijau'

function klik1() {
    body.append(newText);
}

function klik2() {
    body.append(alert('tombol di klik 2 kali'));
}

function mouseIn() {
    body.append(newText1);
    newText1.style.color = 'red';
}

function mouseOut() {
    body.append(newText2);
    newText2.style.color = 'green';
}

function klik3() {
    body.remove('body');
}
