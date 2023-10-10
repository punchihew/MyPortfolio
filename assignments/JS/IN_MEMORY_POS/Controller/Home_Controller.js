// let items = document.getElementById("#itemN")
// let cus = document.getElementById("#customerN")
// let home = document.getElementById("#homeN")
// let placeOder = document.getElementById("#plceOderN")
// let table = document.getElementById('#TableN')

document.getElementById("items").addEventListener("click",function (){
    document.getElementById("customerN").style.display='none';
    document.getElementById("plceOderN").style.display='none';
    document.getElementById("TableN").style.display='none';
    document.getElementById("itemN").style.display='block';

})

document.getElementById("custeR").addEventListener("click",function (){
    document.getElementById("plceOderN").style.display='none';
    document.getElementById("TableN").style.display='none';
    document.getElementById("itemN").style.display='none';
    document.getElementById("customerN").style.display='block';
})
document.getElementById("placeOders").addEventListener("click",function (){
    document.getElementById("plceOderN").style.display='block';
    document.getElementById("TableN").style.display='block';
    document.getElementById("itemN").style.display='none';
    document.getElementById("customerN").style.display='none';
    loadCusIds();
    loadItemIds();
    generateOrderId();

})
document.getElementById("home").addEventListener("click",function (){
    document.getElementById("plceOderN").style.display='none';
    document.getElementById("TableN").style.display='none';
    document.getElementById("itemN").style.display='none';
    document.getElementById("customerN").style.display='none';

})
