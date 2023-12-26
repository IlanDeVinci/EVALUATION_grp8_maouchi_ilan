"use strict";
function test() {
    document.getElementById('aside').classList.toggle("dark");
    document.getElementById('nav').classList.toggle("dark");
    document.getElementById('article').classList.toggle("dark2");
    document.getElementById('header').classList.toggle("fullbresom");
    document.querySelectorAll('td').forEach(e=>e.classList.toggle("fulllumi"));

    if(document.querySelector("header").classList.contains("fullbresom")){
        localStorage['darkmode']= 'enabled';
    } else{
        localStorage['darkmode']= 'disabled';
    }
}

document.getElementById("logo").addEventListener("click", test)


if(localStorage['darkmode']=='enabled'){
    test();
}


const burgerIcon =document.getElementById("burgericon");
const menu = document.getElementById('menu');

burgerIcon.addEventListener('click', function() {
menu.classList.toggle('active');
document.getElementById("home").classList.toggle('hide');
document.getElementById("builds").classList.toggle('hide');
document.getElementById("abilities").classList.toggle('hide');
document.getElementById("login").classList.toggle('hide');
console.log("amog")
})

if(document.URL.includes("lore")){
let passwordInput = document.getElementById('password');
let passCorrect = false ;
function validatePassword() {
    let passwordError = document.getElementById('mdpError');
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\\/-]).{8,}$/;

    if (passwordRegex.test(passwordInput.value) && passwordInput.value.length >= 8) {
        passwordError.textContent = '';
        passCorrect = true ;
    } else {
        passCorrect = false ;
        passwordError.textContent = 'The password must contain at least 1 lowercase letter, 1 uppercase letter, 1 special character and be 8 characters or longer.';
    }
}

passwordInput.addEventListener('input',validatePassword);

let mailInput = document.getElementById('mail');
let mailCorrect = false ;
function validateMail() {
    let mailError = document.getElementById('mailError');
    let mailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
    if (mailRegex.test(mailInput.value) && mailInput.value.length >= 8) {
        mailError.textContent = '';
        mailCorrect = true ;
    } else {
        mailCorrect = false ;
        mailError.textContent = `The email adress is not valid.`;
    }
}

mailInput.addEventListener('input',validateMail);

let nameInput = document.getElementById('name');
let nameCorrect = false ;
function validateName() {
    let nameError = document.getElementById('nameError');
    if (nameInput.value.length >= 3) {
        nameError.textContent = '';
        nameCorrect = true ;
    } else {
        nameCorrect = false ;
        nameError.textContent = `A name must be at least 3 letters long`;
    }
}

nameInput.addEventListener('input',validateName);



document.getElementById('submit').addEventListener("click", function(e){

    if(passCorrect && mailCorrect && nameCorrect){
    document.getElementById('submitted').innerHTML='You have submitted the form.';
    let name = document.querySelector('#name').value;
    let password = document.querySelector('#password').value;
    let email = document.querySelector('#mail').value;
    } else {
    document.getElementById('submitted').innerHTML='The form is not correct.';

    }
    e.preventDefault();
})
}

