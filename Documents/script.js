let searchbar=document.querySelector('#search-bar');
let searchbox=document.querySelector('.search-box');
let shop=document.querySelector('#shop-cart');
let shopcart=document.querySelector('.shopping-cart');
let menubar=document.querySelector('#menu-bar');
let mynav=document.querySelector('.navbar');




searchbar.onclick=()=>{
    searchbox.classList.toggle('active');
}

shop.onclick=()=>{
    shopcart.classList.toggle('active');
}
menubar.onclick=()=>{
    mynavr.classList.toggle('active');
}



