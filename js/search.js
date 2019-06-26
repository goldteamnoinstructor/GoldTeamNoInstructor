const search = document.querySelector('.inputbox');

search.addEventListener('submit',(event)=>{
    event.preventDefault();
    let query = search['search'].value.toLowerCase();
    deleteCards(query);
    issues.forEach(element => {
       if( element.tags.includes(query)){
            
            createCards(issues,resources,issues.indexOf(element));
       }else{
            console.log('not inside array');
       }
    });

    query='';






})



