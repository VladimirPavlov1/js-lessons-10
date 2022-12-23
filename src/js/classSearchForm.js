const API_KEY='002081a311064500ac33bdf8092d1261';
const BASE_URL = 'https://newsapi.org/v2/';

export default class SearchFormNews{
    constructor(){
        this.searchQuery='';
        this.page=1;
    }

fetchDataItem(){
     const options={
        headers:{
            Authorization: API_KEY,
        },
    }
    
    const url= `${BASE_URL}everything?q=${this.searchQuery}&pageSize=5&page=${this.page}`
    
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