"use strict"


function emailCheck(){
    console.log('I am clicked!!');
    const email = document.getElementById('email').value;
    console.log('Email compinent ',email);
    const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";

    if(email === '' || !email.match(pattern)){
        console.log('False')
        document.getElementById('error').innerText = 'please enter a valid email';
        document.getElementById('error1').style.display = 'block';
        return false;

    } else{
        console.log('True');
        document.getElementById('cor').innerText = 'ok';
        document.getElementById('cor').style.display = 'block';
        return true;
    }
    
}