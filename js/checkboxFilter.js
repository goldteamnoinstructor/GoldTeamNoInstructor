//console.log("working");


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
;;
const disabilityBox = document.querySelector('#disabilityCheck');
disability = document.querySelector('#disability');
disabilityBox.addEventListener('change', function (){
    if(disabilityBox.checked){
        disability.style.display = "initial";
    }else {
        disability.style.display = "none";
    }
});




function calcBMI () {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var BMI = (703 * weight) / (height * height);
    console.log(BMI);


    var obese = document.querySelector('#obese');
    if(BMI > 30) {
        obese.style.display = "initial";
    } else obese.style.display = "none";

    var overweight = document.querySelector('#overweight');
    if(BMI >= 25 && BMI < 30) {
        overweight.style.display = "initial";
    } else overweight.style.display = "none";

    var healthy = document.querySelector('#healthy');
    if(BMI >= 18.5 && BMI < 25) {
        healthy.style.display = "initial";
    } else healthy.style.display = "none";

    if(BMI < 18.5 && BMI > 0) {
        underweight.style.display = "initial";
    } else underweight.style.display = "none";

}

