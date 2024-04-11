const passwdBox = document.getElementById("password");
const len = 12;

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const chars = "!@#$%^&*()-_=+[]{}|:',.<>?~";

const all = lowerCase + upperCase + numbers + chars;

function randomPasswd(){
    let password = "";
    while (password.length <= 12){
        password += all[Math.floor(Math.random() * all.length)];
    }
    passwdBox.value = password;
}

function clone(){
    navigator.clipboard.writeText(passwdBox.value);
}