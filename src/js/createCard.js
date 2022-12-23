export default function createMarkup(arr){
return arr.map(item=>`<li class="gallery__item item">
<div class="thumb-img"><img src="${item.urlToImage}" alt=""></div>
<h3 class="img-title">${item.author}</h3>
<p class="img-text">${item.description}</p>`).join('')
}