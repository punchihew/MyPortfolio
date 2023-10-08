var btnSaveItem = $("#btnSaveItem");
var btnUpdateItem = $("#btnUpdateItem");
var btnRemoveItem = $("#btnRemoveItem");
var btnGetAllItem = $("#btnGetAllItem");


$("#itemCodeTxt, #itemNameTxt, #unitePriceTxt, #itemQtyTxt").keydown(function (e){
    if(e.key == "Tab"){
        e.preventDefault();
    }
});

$("#itemCodeTxt").keyup(function (e){
    if(regexItemCode.test($("#itemCodeTxt").val())){
        $("#itemCodeTxt").css("border-color",  "transparent");
    }else{
        $("#itemCodeTxt").css("border-color",  "red");
    }
});


$("#itemCodeTxt").keydown(function (e){
    if(e.keyCode == 13 && regexItemCode.test($("#itemCodeTxt").val())) {
        $("#itemNameTxt").focus();
    }
});

$("#itemNameTxt").keyup(function (e){
    if(regexItemName.test($("#itemNameTxt").val())){
        $("#itemNameTxt").css("border-color",  "transparent");
    }else{
        $("#itemNameTxt").css("border-color",  "red");
    }
});

$("#itemNameTxt").keydown(function (e){
    if(e.keyCode == 13 && regexItemName.test($("#itemNameTxt").val())){
        $("#unitePriceTxt").focus();
    }
});

$("#unitePriceTxt").keyup(function (e){
    if(regexItemUnitePrice.test($("#unitePriceTxt").val())){
        $("#unitePriceTxt").css("border-color",  "transparent");
    }else{
        $("#unitePriceTxt").css("border-color",  "red");
    }
});

$("#unitePriceTxt").keydown(function (e){
    if(e.keyCode == 13 && regexItemUnitePrice.test($("#unitePriceTxt").val())){
        $("#itemQtyTxt").focus();
    }
});

$("#itemQtyTxt").keyup(function (e){
    if(regexItemQty.test($("#itemQtyTxt").val())){
        $("#itemQtyTxt").css("border-color",  "transparent");
    }else{
        $("#itemQtyTxt").css("border-color",  "red");
    }
});


$("#itemQtyTxt").keydown(function (e){
    if(e.keyCode == 13 && regexItemQty.test($("#itemQtyTxt").val())){
        itemSave();
    }
});



function itemSave(){

    if(regexItemCode.test($("#itemCodeTxt").val()) && regexItemName.test($("#itemNameTxt").val()) && regexItemUnitePrice.test($("#unitePriceTxt").val()) && regexItemQty.test($("#itemQtyTxt").val())){
        var is = false;

        for(let i = 0; i < itemDetails.length; i++){
            if(itemDetails[i].itemCode == $("#itemCodeTxt").val()){
                is = true;
            }
        }

        if(is == false){

            var tblBody = $("#itemTblBody");

            var itemCode = $("#itemCodeTxt").val();
            var itemName = $("#itemNameTxt").val();
            var unitePrice = $("#unitePriceTxt").val();
            var qty = $("#itemQtyTxt").val();

            item = {
                itemCode : itemCode,
                itemName : itemName,
                unitePrice : unitePrice,
                qty : qty
            }

            itemDetails.push(item);

            let tr=$('<tr> <td>'+itemDetails[itemDetails.length-1].itemCode+'</td> <td>'+itemDetails[itemDetails.length-1].itemName+'</td> <td>'+itemDetails[itemDetails.length-1].unitePrice+'</td> <td>'+itemDetails[itemDetails.length-1].qty+'</td></tr>');
            $("#itemTblBody").append(tr);

            itemClearFields();

        }else{
            alert("Item Code Already Used")
        }
    }


    $("#itemTblBody>tr").click(function (e){

        $("#itemCodeTxt").val($(this).children().eq(0).text());
        $("#itemNameTxt").val($(this).children().eq(1).text());
        $("#unitePriceTxt").val($(this).children().eq(2).text());
        $("#itemQtyTxt").val($(this).children().eq(3).text());

    });

}


btnSaveItem.click(function(){

    itemSave();
    itemClearFields();
    itemGetAll();

});






