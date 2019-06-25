//console.log("working");

var flexOrder = 0;

const heartBox = document.querySelector('#heartDisease');
heart = document.querySelector('#heart');

heartBox.addEventListener('change', function(){
    if(heartBox.checked){
        heart.style.display = "initial";
        document.getElementById("heart").style.order = flexOrder;
        flexOrder--;
    }else {
        heart.style.display = "none";
    }
});



const drugBox = document.querySelector('#drugsCheck');
drugs = document.querySelector('#drugs');
drugBox.addEventListener('change', function(){
    if(drugBox.checked){
        drugs.style.display = "initial";
        document.getElementById("drugs").style.order = flexOrder;
        flexOrder--;
    }else {
        drugs.style.display = "none";
    }
});


const asthmaBox = document.querySelector('#asthmaCheck');
asthma = document.querySelector('#asthma');
asthmaBox.addEventListener('change', function(){
    if(asthmaBox.checked){
        asthma.style.display = "initial";
        document.getElementById("asthma").style.order = flexOrder;
        flexOrder--;
    }else {
        asthma.style.display = "none";
    }
});


const sexBox = document.querySelector('#sexCheck');
sex = document.querySelector('#aids');
sexBox.addEventListener('change', function (){
    if(sexBox.checked){
        sex.style.display = "initial";
        document.getElementById("aids").style.order = flexOrder;
        flexOrder--;
    }else {
        sex.style.display = "none";
    }
});


const disabilityBox = document.querySelector('#disabilityCheck');
disability = document.querySelector('#disability');
disabilityBox.addEventListener('change', function (){
    if(disabilityBox.checked){
        disability.style.display = "initial";
        document.getElementById("disability").style.order = flexOrder;
        flexOrder--;
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
        document.getElementById("obese").style.order = flexOrder;
        flexOrder--;
    } else obese.style.display = "none";

    var overweight = document.querySelector('#overweight');
    if(BMI >= 25 && BMI < 30) {
        overweight.style.display = "initial";
        document.getElementById("overweight").style.order = flexOrder;
        flexOrder--;
    } else overweight.style.display = "none";

    var healthy = document.querySelector('#healthy');
    if(BMI >= 18.5 && BMI < 25) {
        healthy.style.display = "initial";
        document.getElementById("healthy").style.order = flexOrder;
        flexOrder--;
    } else healthy.style.display = "none";

    if(BMI < 18.5 && BMI > 0) {
        underweight.style.display = "initial";
        document.getElementById("underweight").style.order = flexOrder;
        flexOrder--;
    } else underweight.style.display = "none";

}


function ageSex () {

    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var mammogram = document.getElementById("mammogram");
    var prostate = document.getElementById("prostate");


    if(age >= 50 && sex === "Female"){
        mammogram.style.display = "initial";
        document.getElementById("mammogram").style.order = flexOrder;
        flexOrder--;
    } else mammogram.style.display = "none";

    if(age >= 50 && sex === "Male"){
        prostate.style.display = "initial";
        document.getElementById("prostate").style.order = flexOrder;
        flexOrder--;
    } else prostate.style.display = "none";



}



























