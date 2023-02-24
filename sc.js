let user = document.getElementById('user');
let password = document.getElementById('password');
let enter = document.getElementById('enter');
let reg = document.getElementById('reg');


enter.addEventListener('click', () => {

    if(user.value === 'admin' && password.value == 'admin')
        location.href ='main.html';

})