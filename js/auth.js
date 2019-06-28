const register =document.querySelector('#signbox');
register.addEventListener('submit',(event)=>{
    event.preventDefault();

    //user info
    const email = register['signup-email'].value
    const password = register['signup-password'].value;
    const username = register['signup-user'].value;
    
    //sign up user
    auth.createUserWithEmailAndPassword(email,password).then(cred=>{
        console.log(cred.user);
        const signup = document.querySelector('#firebase-register');
        // M.Modal.getInstance(signup).close();
        // register.reset();
        window.location.replace("https://goldteamnoinstructor.github.io/GoldTeamNoInstructor/home.html");
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           // Updates the user attributes:
          user.updateProfile({ displayName: username});
        }
    });

});

//logout
// const logout = document.querySelector('#logout');
// logout.addEventListener('click',(event)=>{
//     event.preventDefault();
//     auth.signOut().then(()=>{
//         console.log('logged out');
//     });
// })