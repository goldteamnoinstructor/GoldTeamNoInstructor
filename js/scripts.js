// const cardContainer = document.createElement('section');
// const cardStyle =document.createElement('div');
// const imgContainer = document.createElement('div');
// const image = document.createElement('img');
// const infoContainer= document.createElement('div');
// const titleContainer= document.createElement('div');
// const title = document.createElement('h1');
// const information = document.createElement('div');
// const illness = document.createElement('div');
// const name = document.createElement('h4');
// const paragraph = document.createElement('p');
// const resoruces = document.createElement('div');
// const help = document.createElement('h5');
// const list = document.createElement('ul');
// const listitem1 = document.createElement('li');
// const link = document.createElement('a');

// //adds necessary classes ,ids ,and information for the cards
// cardStyle.classList.add('heart');
// cardContainer.classList.add('cardBox','col-10','ml-auto');
// cardStyle.id='card3';
// imgContainer.classList.add('picContainer');
// image.classList.add('pic');
// image.src='images/heartDisease.png';
// infoContainer.classList.add('titleAndText');
// title.classList.add('title');
// title.innerHTML='Heart Disease is Preventable';
// information.classList.add('rightHalf');
// illness.classList.add('blurb');
// name.innerHTML='High Blood Pressure';
// paragraph.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio eligendi harum hic labore, nostrum!
// Animi consequuntur dignissimos distinctio dolorem doloremque esse fuga, harum illo incidunt ipsam minus nemo neque nobis,
// optio perferendis placeat quas repellat sapiente similique sint tempore totam, velit voluptatum? Atque corporis delectus deleniti,
// eligendi eos eum eveniet illo.`
// resoruces.classList.add('links');
// help.innerHTML='Resources';
// link.href='https://www.co.fresno.ca.us/departments/behavioral-health/substance-use-disorder-services';
// link.innerHTML='Fresno Substance Use Disorder Services';

// //compiles and adds html cards to the dom
// document.body.appendChild(cardContainer);
// cardContainer.appendChild(cardStyle);
// cardStyle.appendChild(imgContainer);
// imgContainer.appendChild(image);
// cardStyle.appendChild(infoContainer);
// infoContainer.appendChild(titleContainer);
// titleContainer.appendChild(title);
// infoContainer.appendChild(information);
// information.appendChild(illness);
// illness.appendChild(name);
// illness.appendChild(paragraph);
// information.appendChild(resoruces);
// resoruces.appendChild(help);
// resoruces.appendChild(list);
// list.appendChild(listitem1);
// listitem1.appendChild(link);


function createCards(issue,resource,index){
    
    const cardContainer = document.createElement('section');
    const cardStyle =document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
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
    

    cardStyle.classList.add('heart');
    cardContainer.classList.add('cardBox','col-10','ml-auto');
    cardContainer.id='card';
    cardStyle.id='card3';
    imgContainer.classList.add('picContainer');
    image.classList.add('pic');
    image.src= picture;
    
    infoContainer.classList.add('titleAndText');
    title.classList.add('title');
    title.innerHTML='Heart Disease is Preventable';
    information.classList.add('rightHalf');
    illness.classList.add('blurb');
    name.innerHTML=type;
    paragraph.innerHTML=description;
    resoruces.classList.add('links');
    help.innerHTML='Resources';
    link.href='https://www.co.fresno.ca.us/departments/behavioral-health/substance-use-disorder-services';
    link.innerHTML='Fresno Substance Use Disorder Services';

    document.querySelector('#retro').appendChild(cardContainer);
    cardContainer.appendChild(cardStyle);
    cardStyle.appendChild(imgContainer);
    imgContainer.appendChild(image);
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








}
function deleteCards(query){
    const element = document.querySelector('#retro');
    const targets = document.querySelectorAll('#card');
    
    if(!targets.length==0){
        for(item=0;item<targets.length;item++){
            targets[item].remove();
        }        
        
    }else{
        console.log(2);
    }
    // if(query&&targets){
    //     // while(element.firstChild){
    //     //     element.firstChild.remove();
    //     // }

    // }    
}

// createfiles(issues,resoruces);