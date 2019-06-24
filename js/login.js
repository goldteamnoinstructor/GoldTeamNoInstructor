const login = document.querySelector('#signbox');
login.addEventListener('submit',(event)=>{
    event.preventDefault();

    const email = login['login-email'].value;
    const password = login['login-password'].value;
    auth.signInWithEmailAndPassword(email,password).then(cred=>{
        // login.reset();
        window.location.replace("http://127.0.0.1:5500/home.html");
    })
})