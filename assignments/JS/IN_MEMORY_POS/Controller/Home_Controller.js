let items = document.querySelector("#itemN")
let cus = document.querySelector("#customerN")
let home = document.querySelector("#homeN")
let placeOder = document.querySelector("#plceOderN")
let table = document.querySelector('#TableN')

document.querySelector("#items").addEventListener("click",function (){
    cus.style.display='none';
    placeOder.style.display='none';
    table.style.display='none';
    items.style.display='block';
})

document.querySelector("#custeR").addEventListener("click",function (){
    placeOder.style.display='none';
    items.style.display='none';
    table.style.display='none';
    cus.style.display='block';
})
document.querySelector("#placeOders").addEventListener("click",function (){
    cus.style.display='none';
    items.style.display='none';
    placeOder.style.display='block';
    table.style.display='block';
})
document.querySelector("#home").addEventListener("click",function (){
    cus.style.display='none';
    items.style.display='none';
    placeOder.style.display='none';
    table.style.display='none';

})
