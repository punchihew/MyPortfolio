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

