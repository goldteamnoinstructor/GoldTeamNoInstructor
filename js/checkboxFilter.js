console.log("working");


const heartBox = document.querySelector('#heartDisease');
heart = document.querySelector('#heart');

heartBox.addEventListener('change', function(){
    if(heartBox.checked){
        heart.style.display = "initial";
    }else {
        heart.style.display = "none";
    }
});



const drugBox = document.querySelector('#drugsCheck');
drugs = document.querySelector('#drugs');
drugBox.addEventListener('change', function(){
    if(drugBox.checked){
        drugs.style.display = "initial";
    }else {
        drugs.style.display = "none";
    }
});


const asthmaBox = document.querySelector('#asthmaCheck');
asthma = document.querySelector('#asthma');
asthmaBox.addEventListener('change', function(){
    if(asthmaBox.checked){
        asthma.style.display = "initial";
    }else {
        asthma.style.display = "none";
    }
});


const sexBox = document.querySelector('#sexCheck');
sex = document.querySelector('#aids');
sexBox.addEventListener('change', function (){
    if(sexBox.checked){
        sex.style.display = "initial";
    }else {
        sex.style.display = "none";
    }
});

const disabilityBox = document.querySelector('#disabilityCheck');
disability = document.querySelector('#disability');
disabilityBox.addEventListener('change', function (){
    if(disabilityBox.checked){
        disability.style.display = "initial";
    }else {
        disability.style.display = "none";
    }
});