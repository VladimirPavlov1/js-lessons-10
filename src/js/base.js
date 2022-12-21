console.log('hello')
//API_KEY= 002081a311064500ac33bdf8092d1261

const refs={
     
formEl:document.querySelector('.js-search'),
inputEl:document.querySelector('.form-control'),
labelEl:document.querySelector('.label-text'),
btnFormEl:document.querySelector('.btn-form'),
galleryListEl:document.querySelector('.js-articles-container'),
btnLoadMoreEl:document.querySelector('.btn-action'),
}

const options={
    headers:{
        Authorization: '002081a311064500ac33bdf8092d1261',
    },
}

const url= 'https://newsapi.org/v2/everything?q=cat&pageSize=5&page=1'

fetch(url,options)
.then(responce=>responce.json())
.then(data=>data.articles)