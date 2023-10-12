$('#customerIdTxtOrderPage').val(CustomerDetails[0].cid);
$('#customerNameTxtOrderPage').val(CustomerDetails[0].cname);
$('#customerAddressTxtOrderPage').val(CustomerDetails[0].caddress);
$('#customerSalaryTxtOrderPage').val(CustomerDetails[0].csalary);
$('#itemCodeTxtOrderPage').val(itemDetails[0].itemCode);
$('#itemNameTxtOrderPage').val(itemDetails[0].itemName);
$('#unitePriceTxtOrderPage').val(itemDetails[0].unitePrice);
$('#itemQtyTxtOrderPage').val(itemDetails[0].qty);


let totalFinal = 0;


function loadCusIds() {
    var optionCus = '';
    for (var i = 0; i < CustomerDetails.length; i++) {
        optionCus += '<option value="' + CustomerDetails[i].cid + '">' + CustomerDetails[i].cid + '</option>';
    }
    $('#customerIdOrder').append(optionCus);
}

function loadItemIds() {
    var optionItem = '';
    for (var i = 0; i < itemDetails.length; i++) {
        optionItem += '<option value="' + itemDetails[i].itemCode + '">' + itemDetails[i].itemCode + '</option>';
    }
    $('#itemOrder').append(optionItem);
}

// function balance() {
//     if(orderTotal.value <= cashTxtOrderPage.value){
//         alert("same")
//     }else{
//         alert("enough money")
//     }
// }

function generateOrderId(){
    if(orderDetails.length == 0){
        $('#orderIDTxtOrderPage').val(1);
    }else{
        $('#orderIDTxtOrderPage').val(orderDetails.length + 2);
    }
}

$('#customerIdOrder').change(function(){

    for (let i=0; i < CustomerDetails.length; i++){
        if ($(this).val() == CustomerDetails[i].cid){
            $('#customerIdTxtOrderPage').val(CustomerDetails[i].cid);
            $('#customerNameTxtOrderPage').val(CustomerDetails[i].cname);
            $('#customerAddressTxtOrderPage').val(CustomerDetails[i].caddress);
            $('#customerSalaryTxtOrderPage').val(CustomerDetails[i].csalary);
            break;
        }
    }
});

$('#itemOrder').change(function(){

    for (let i=0; i < itemDetails.length; i++){
        if ($(this).val() == itemDetails[i].itemCode){
            $('#itemCodeTxtOrderPage').val(itemDetails[i].itemCode);
            $('#itemNameTxtOrderPage').val(itemDetails[i].itemName);
            $('#unitePriceTxtOrderPage').val(itemDetails[i].unitePrice);
            $('#itemQtyTxtOrderPage').val(itemDetails[i].qty);
            break;
        }
    }
});

$('#btnAddItemOrder').click(function (){
    var code = $('#itemOrder').val();
    var name = $('#itemNameTxtOrderPage').val();
    var qty = $('#itemOrderQtyOrderTxtOrderPage').val();
    var total = parseInt($('#itemOrderQtyOrderTxtOrderPage').val()) * parseInt($('#unitePriceTxtOrderPage').val());


    let tr=$('<tr> <td>'+code+'</td> <td>'+name+'</td> <td>'+qty+'</td> <td>'+total+'</td></tr>');
    $("#tblItemBodyOrderPage").append(tr);

    totalFinal = totalFinal + total;

    $('#orderTotal').text(totalFinal);

    for(let i = 0; i < itemDetails.length; i++){
        if(itemDetails[i].itemCode == code){
            itemDetails[i].qty = parseInt(itemDetails[i].qty) - parseInt(qty);
            $('#itemQtyTxtOrderPage').val(itemDetails[i].qty);
            break;
        }
    }

    $('#itemOrderQtyOrderTxtOrderPage').val("");

});

$("#discountTxtOrderPage").keydown(function (e){
    if(e.keyCode == 13) {
        $('#orderSubTotal').text(totalFinal - parseInt($("#discountTxtOrderPage").val()));
    }
});


$("#cashTxtOrderPage").keydown(function (e){
    if(e.keyCode == 13) {
        $('#balanceTxtOrderPage').val(parseInt($("#cashTxtOrderPage").val()) - parseInt($('#orderSubTotal').text()));
    }
});

$('#btnPlaceOrder').click(function (){

    let totl =parseFloat( $('#lblTotal').val());
    let bal =parseFloat( $('#balanceTxtOrderPage').val());
    let cash =parseFloat( $('#cashTxtOrderPage').val());
    let result = cash-totl;
    $('#balanceTxtOrderPage').val(result)

    var orderId = $('#orderIDTxtOrderPage').val();
    var customerId = $('#customerIdOrder').val();
    var total = $('#orderSubTotal').text();
    var date = $('#dateTxtOrderPage').val();


    order = {
        orderId : orderId,
        customerId : customerId,
        total : total,
        date : date
    }

    orderDetails.push(order);

    $('#tblItemBodyOrderPage tr').remove();

    $('#orderTotal').text("0");
    $('#orderSubTotal').text("0");
    $('#cashTxtOrderPage').val("");
    $('#discountTxtOrderPage').val("");
    $('#balanceTxtOrderPage').val("");



});



