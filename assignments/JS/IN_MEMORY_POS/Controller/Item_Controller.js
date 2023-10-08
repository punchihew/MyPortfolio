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


