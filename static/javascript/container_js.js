var x = document.getElementById("container_size").value;

if (x == 20)
    document.getElementById("volume_cartoon").value = "23,50,080";
else{
    document.getElementById("volume_cartoon").value = "47,00,160";

}


function volume(){
    var x = document.getElementById("container_size").value;

    if (x == 20)
        document.getElementById("volume_cartoon").value = "23,50,080";
    else{
        document.getElementById("volume_cartoon").value = "47,00,160";

    }

}



function symbol_display() {
    
    var x = document.getElementById("c_currency1").value;
    document.getElementById("target_currency_symbol1").value = " 1 " + x + "  = ";
  }



function ShowHideDiv(edit_inputs) {
var dv = document.getElementById("div_form_002");
if (edit_inputs.value == "Yes") {
    dv.style.display = "block";
    edit_inputs.value = "No";
} else {
    dv.style.display = "none";
    edit_inputs.value = "Yes";
}
}


function send_value_to_main(){
    var curr_value = document.getElementById("currency_exchange1").value;
    if (curr_value > 0 )
        document.getElementById("currency_exchange").value = curr_value ;
    // if (curr_value == 0)
    //     document.getElementById("currency_exchange").value = 1 ;

    var curr =  document.getElementById("c_currency1").value;

    if (curr == 'INR'){
        document.getElementById("c_currency").selectedIndex = "0";}
    
    else if (curr == 'AED'){
        document.getElementById("c_currency").selectedIndex = "1";}
    
    else{
        document.getElementById("c_currency").selectedIndex = "2";
    }

    document.getElementById("generate_report").click();

}



function symbol_display2(){

    var x = document.getElementById("c_currency2").value;
    var y = document.querySelectorAll(".dest_con_charges");

    for (var i = 0; i < y.length; i++) {
        y[i].innerHTML = x;}

    document.getElementById("target_currency_symbol2").value = "1" + x 


}


function ShowHideDiv1(display_curr_table) {
    var dv = document.getElementById("curr_ex_div");
    if (display_curr_table.value == "Yes") {
        dv.style.display = "block";
        display_curr_table.value = "No";
    } else {
        dv.style.display = "none";
        display_curr_table.value = "Yes";
    }
    }



$(document).mouseup(function(e) 
{
    var container = $("#curr_ex_div");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
        document.getElementById("display_curr_table").value = "Yes";
    }
});

function ShowHideDivinputs(edit_inputs) {
    document.getElementById("div_form_002").style.display = "none";
    var dv1 = document.getElementById("edit_inputs").value = "Yes";

}


// $(".input_onchange").on('change', function(){    // 2nd (A)
//     // do your code here
//     // It will specifically called on change of your element
//     document.getElementById("generate_report").click();

// });