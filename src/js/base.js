

import createMarkup from "./createCard";
import BtnLoadMore from "./btnLoad";
import SearchFormNews from "./classSearchForm";
import createMarkup from "./createCard";



const refs={
     
formSearchEl:document.querySelector('.js-search'),
inputEl:document.querySelector('.form-control'),
btnFormEl:document.querySelector('.btn-form'),
galleryListEl:document.querySelector('.js-articles-container'),
}


const btnLoadMore= new BtnLoadMore({selector:'[data-action="load-more"]',
hidden:true,});




refs.formSearchEl.addEventListener('submit', onFormSearchSubmit);
btnLoadMore.refs.button.addEventListener('click',fetchArticles);



const searchFormNews =new SearchFormNews();


function onFormSearchSubmit(evt){
    evt.preventDefault();
  
    searchFormNews.query = evt.currentTarget.elements.query.value;

    if(searchFormNews.query===''){
        
       return alert('пошук не коректний');  
    }
    btnLoadMore.show();
    searchFormNews.resetPage();
    clearGalleryContainer();
        
    fetchArticles();
}


function fetchArticles(){
    btnLoadMore.disabled();
    searchFormNews.fetchDataItem().then(articles=>{
    refs.galleryListEl.insertAdjacentHTML('beforeend',createMarkup(articles));
    btnLoadMore.enable();
    })
}

function clearGalleryContainer(){
    refs.galleryListEl.innerHTML='';
}