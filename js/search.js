const search = document.querySelector('.inputbox');

search.addEventListener('submit',(event)=>{
    event.preventDefault();
    let query = search['search'].value.toLowerCase();
    search['search'].value="";
    deleteCards(query);
    console.log(issues);
    issues.forEach( element => {
        console.log(element);
       if( element.tags.includes(query)){
            createCards(issues,resources,issues.indexOf(element));
       }
    });

})



