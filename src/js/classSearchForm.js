export default class SearchFormNews{
    constructor(){
        this.searchQuery='';
        this.page=1;
    }

fetchDataItem(){
     const options={
        headers:{
            Authorization: '002081a311064500ac33bdf8092d1261',
        },
    }
    
    const url= `https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=5&page=${this.page}`
    
    return fetch(url,options)
    .then(response=>response.json())
    .then(data=>{
        this.incrementPage();
       return data.articles})
}

get query(){
    return this.searchQuery;
}

set query(newQuery){
    this.searchQuery=newQuery;
}

incrementPage(){
    this.page +=1;
}

resetPage(){
    this.page=1;
}

}