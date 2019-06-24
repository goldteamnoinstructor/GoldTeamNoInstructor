const search = document.querySelector('.inputbox');

search.addEventListener('submit',(event)=>{
    event.preventDefault();
    let query = search['search'].value;
    issues.forEach(element => {
       if( element.tags.includes(query)){
           console.log(1);
       }else{
           console.log(2);
       }
    });

    query='';






})