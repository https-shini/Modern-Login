'use strict'

//Button function
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', function(){
    container.classList.add("active");
});

loginBtn.addEventListener('click', function(){
    container.classList.remove("active");
});

//Mobile button
const MobRegisterBtn = document.getElementById('btnR-mob').addEventListener('click', function(){
    container.classList.add("active");
});
const MobLoginBtn = document.getElementById('btnL-mob').addEventListener('click', function(){
    container.classList.remove("active");
});
