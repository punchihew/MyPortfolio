let item = document.querySelector("#itemN")
let customer = document.querySelector("#customerN")
let home = document.querySelector("#homeN")
let placeOder = document.querySelector("#plceOderN")
let table = document.querySelector('#TableN')

document.querySelector("#items").addEventListener("click",function (){
    customer.style.display='none';
    placeOder.style.display='none';
    table.style.display='none';
    item.style.display='block';
})

document.querySelector("#custeR").addEventListener("click",function (){
    placeOder.style.display='none';
    item.style.display='none';
    table.style.display='none';
    customer.style.display='block';
})
document.querySelector("#placeOders").addEventListener("click",function (){
    customer.style.display='none';
    item.style.display='none';
    placeOder.style.display='block';
    table.style.display='block';
})
document.querySelector("#home").addEventListener("click",function (){
    customer.style.display='none';
    item.style.display='none';
    placeOder.style.display='none';
    table.style.display='none';

})
