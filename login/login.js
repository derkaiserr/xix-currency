let goToSignup = document.querySelector('.new-here')
let goToLogin = document.getElementById('signup')
let loginPage = document.querySelector('.content')
let signupPage = document.querySelector('.content2')
let signUpInput = document.querySelector('.input2')
let loginInput = document.querySelector('.input1')
let revealPassword = document.querySelector('.fa-eye-slash')
let revealPassword2 = document.querySelector('.sign-eye-slash')
let hidePassword = document.querySelector('.fa-eye')
let hidePassword2 = document.querySelector('.sign-eye')


goToSignup.addEventListener('click', function(){
    loginPage.classList.add('hide')
    signupPage.classList.remove('hide')
})
goToLogin.addEventListener('click', function(){
    signupPage.classList.add('hide')
    loginPage.classList.remove('hide')
})

revealPassword.addEventListener('click', function(){
loginInput.type = 'text'
signUpInput.type = 'text'
revealPassword.classList.add('hide')
hidePassword.classList.remove('hide')
})


hidePassword.addEventListener('click', function(){
loginInput.type = 'password'
signUpInput.type = 'password'
revealPassword.classList.remove('hide')
hidePassword.classList.add('hide')
})

revealPassword2.addEventListener('click', function(){
    signUpInput.type = 'text'
    revealPassword2.classList.add('hide')
    hidePassword2.classList.remove('hide')
})

hidePassword2.addEventListener('click', function(){
signUpInput.type = 'password'
revealPassword2.classList.remove('hide')
hidePassword2.classList.add('hide')
})