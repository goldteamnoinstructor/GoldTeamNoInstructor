auth.onAuthStateChanged(user =>{
    if(user){
        console.log('logged in: ',user);
        navUI(user);
    }else{
        console.log('logged out user');
        navUI();
    }

})

const logout = document.querySelector('#exit');
logout.addEventListener('click',(event)=>{
    event.preventDefault();
    auth.signOut();
})



const logOutLinks = document.querySelectorAll('.logout');
const logInLinks = document.querySelectorAll('.login');

const navUI = (user)=> {
    if(user){
        logInLinks.forEach(item => item.style.display='block');
        logOutLinks.forEach(item => item.style.display='none');
    }else{
        logInLinks.forEach(item => item.style.display='none');
        logOutLinks.forEach(item => item.style.display='block');        
    }
};