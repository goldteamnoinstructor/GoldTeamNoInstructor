function createCards(issue,resource,index){
    
    const cardContainer = document.createElement('section');
    const cardStyle =document.createElement('div');
    const imgContainer = document.createElement('div');
    const infoContainer= document.createElement('div');
    const titleContainer= document.createElement('div');
    const title = document.createElement('h1');
    const information = document.createElement('div');
    const illness = document.createElement('div');
    const name = document.createElement('h4');
    const paragraph = document.createElement('p');
    const resoruces = document.createElement('div');
    const help = document.createElement('h5');
    const list = document.createElement('ul');
    const listitem1 = document.createElement('li');
    const link = document.createElement('a');
    const description = issue[index].description;
    const picture = issue[index].image;
    const type = issue[index].name;
    const topCard = issue[index].title;
    const color = issue[index].color;
    const place = issue[index].link;
    const pass=flexOrder;

    cardStyle.classList.add('heart');
    cardStyle.style.backgroundImage=color;
    cardContainer.classList.add('cardBox','col-10','ml-auto');
    cardContainer.id='card';
    cardContainer.style.display='initial';
    cardContainer.style.order=flexOrder;
    flexOrder--;
    cardStyle.id='card3';
    imgContainer.classList.add('picContainer','pic1');
    imgContainer.style.backgroundImage=`url("${picture}")`
    infoContainer.classList.add('titleAndText');
    title.classList.add('title');
    title.innerHTML=topCard;
    information.classList.add('rightHalf');
    illness.classList.add('blurb');
    name.innerHTML=type;
    paragraph.innerHTML=description;
    resoruces.classList.add('links');
    help.innerHTML='Resources';
    link.href='https://www.co.fresno.ca.us/departments/behavioral-health/substance-use-disorder-services';
    link.innerHTML=place;

    document.querySelector('#retro').appendChild(cardContainer);
    cardContainer.appendChild(cardStyle);
    cardStyle.appendChild(imgContainer);
    cardStyle.appendChild(infoContainer);
    infoContainer.appendChild(titleContainer);
    titleContainer.appendChild(title);
    infoContainer.appendChild(information);
    information.appendChild(illness);
    illness.appendChild(name);
    illness.appendChild(paragraph);
    information.appendChild(resoruces);
    resoruces.appendChild(help);
    resoruces.appendChild(list);
    list.appendChild(listitem1);
    listitem1.appendChild(link);

    if(issues[index].name=='Asthma'){
        createAllergy(pass);
    }
    if(issues[index].name=='Heat Stroke'){
        createWeather(pass);
    }

}

function createAllergy(order){
    const cardContainer = document.createElement('section');
    const cardStyle =document.createElement('div');
    const imgContainer = document.createElement('div');
    const infoContainer= document.createElement('div');
    const titleContainer= document.createElement('div');
    const title = document.createElement('h1');
    const information = document.createElement('div');
    const illness = document.createElement('div');
    const name = document.createElement('h4');
    const paragraph = document.createElement('p');
    const resoruces = document.createElement('div');
    const outside = document.createElement('p');
    const list = document.createElement('ul');

    cardStyle.classList.add('heart');
    cardStyle.style.backgroundImage='linear-gradient(to right, orange, #ffffff)';
    cardContainer.classList.add('cardBox','col-10','ml-auto');
    cardContainer.id='card';
    cardContainer.style.display='initial';
    cardContainer.style.order=order; 
    cardStyle.id='card3';
    imgContainer.classList.add('picContainer','pic1');
    imgContainer.style.backgroundImage="url('./images/allergies.jpg')";
    infoContainer.classList.add('titleAndText');
    title.classList.add('title');
    title.innerHTML='Allergens Report';
    information.classList.add('rightHalf');
    illness.classList.add('blurb');
    name.innerHTML='Allergy Information in the Fresno Area';
    list.id='allergyReport';
    resoruces.classList.add('links');
    outside.id='activity';

    document.querySelector('#retro').appendChild(cardContainer);
    cardContainer.appendChild(cardStyle);
    cardStyle.appendChild(imgContainer);
    cardStyle.appendChild(infoContainer);
    infoContainer.appendChild(titleContainer);
    titleContainer.appendChild(title);
    infoContainer.appendChild(information);
    information.appendChild(illness);
    illness.appendChild(name);
    illness.appendChild(list);
    information.appendChild(resoruces);
    resoruces.appendChild(outside);    
    allergens();
   
}

function createWeather(order){
    const cardContainer = document.createElement('section');
    const cardStyle =document.createElement('div');
    const imgContainer = document.createElement('div');
    const infoContainer= document.createElement('div');
    const titleContainer= document.createElement('div');
    const title = document.createElement('h1');
    const information = document.createElement('div');
    const illness = document.createElement('div');
    const name = document.createElement('h4');
    const paragraph = document.createElement('p');
    const resoruces = document.createElement('div');
    const outside = document.createElement('p');
    const list = document.createElement('ul');


    cardStyle.classList.add('heart');
    cardStyle.style.backgroundImage='linear-gradient(to right, skyblue, #a3f5ed)';
    cardContainer.classList.add('cardBox','col-10','ml-auto');
    cardContainer.id='card';
    cardContainer.style.display='initial';
    cardContainer.style.order=order;
    cardStyle.id='card3';
    imgContainer.classList.add('picContainer','pic1');
    imgContainer.style.backgroundImage="url('./images/hot.jpg')";
    infoContainer.classList.add('titleAndText');
    title.classList.add('title');
    title.innerHTML='Weather Tip';
    information.classList.add('rightHalf');
    illness.classList.add('blurb');
    name.innerHTML='Todays Weather';
    list.id='weatherInfo';
    resoruces.classList.add('links');
    outside.id='heat';

    document.querySelector('#retro').appendChild(cardContainer);
    cardContainer.appendChild(cardStyle);
    cardStyle.appendChild(imgContainer);
    cardStyle.appendChild(infoContainer);
    infoContainer.appendChild(titleContainer);
    titleContainer.appendChild(title);
    infoContainer.appendChild(information);
    information.appendChild(illness);
    illness.appendChild(name);
    illness.appendChild(list);
    information.appendChild(resoruces);
    resoruces.appendChild(outside);  
    weather();
   
}

function deleteCards(query){
    const element = document.querySelector('#retro');
    const targets = document.querySelectorAll('#card');
    
    if(!targets.length==0){
        for(item=0;item<targets.length;item++){
            targets[item].remove();
        }        
        
    } 
}




