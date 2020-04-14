"use strict"

function emailCheck(){
    const email = document.getElementById('email');
    const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";

    if(email === '' || email === !pattern){
        document.querySelector('.error').innerHTML = 'please enter a valid email';
        document.querySelector('.error').style.display = 'block';
        return false;

    } else{
        document.querySelector('.cor').innerHTML = 'ok';
        document.querySelector('.cor').style.display = 'block';
    }
    return true;
}