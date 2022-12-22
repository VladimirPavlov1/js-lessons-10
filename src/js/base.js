console.log('hello')
//API_KEY= 002081a311064500ac33bdf8092d1261

const refs={
     
formSearchEl:document.querySelector('.js-search'),
inputEl:document.querySelector('.form-control'),
labelEl:document.querySelector('.label-text'),
btnFormEl:document.querySelector('.btn-form'),
galleryListEl:document.querySelector('.js-articles-container'),
btnLoadMoreEl:document.querySelector('.btn-action'),
}

refs.formSearchEl.addEventListener('submit', onFormSearchSubmit);
refs.btnLoadMoreEl.addEventListener('click',onLoadBtnClick);


import SearchFormNews from "./classSearchForm";

const searchFormNews =new SearchFormNews();
console.log(searchFormNews)

function onFormSearchSubmit(evt){
    evt.preventDefault();
    console.log(evt);
    searchFormNews.query = evt.currentTarget.elements.query.value;
    
    searchFormNews.resetPage();
    searchFormNews.fetchDataItem().then(articles=>console.log(articles))

}

function onLoadBtnClick(){
    searchFormNews.fetchDataItem();
}
