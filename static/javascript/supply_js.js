document.getElementById("mrp").onkeyup = function() {cost_Price()};
document.getElementById("cost_price").onkeyup = function() {mrp()};



function ShowHideDiv(edit_inputs) {
    var dv = document.getElementById("form_003");
    if (edit_inputs.value == "Yes") {
        dv.style.display = "block";
        edit_inputs.value = "No";
    } else {
        dv.style.display = "none";
        edit_inputs.value = "Yes";
    }
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



function symbol_display() {

    var x = document.getElementById("c_currency1").value;
    document.getElementById("input_symbol").innerHTML = x;

    curr = document.getElementById("supply_currency").value;

    if (curr == '₹'){
        document.getElementById("supply_currency1").selectedIndex = "1";}
    
    else if (curr == 'AED'){
        document.getElementById("supply_currency1").selectedIndex = "0";}
    
    else{
        document.getElementById("supply_currency1").selectedIndex = "2";
    }



    }


function send_value_to_main(){
    var curr_value = document.getElementById("currency_exchange1").value;

    document.getElementById("supply_curr_exchange").value = curr_value ;
    // if (curr_value == 0)
    //     document.getElementById("currency_exchange").value = 1 ;

    var curr =  document.getElementById("c_currency1").value;

    if (curr == '₹'){
        document.getElementById("supply_currency1").selectedIndex = "1";}
    
    else if (curr == 'AED'){
        document.getElementById("supply_currency1").selectedIndex = "0";}
    
    else{
        document.getElementById("supply_currency1").selectedIndex = "2";
    }

    document.getElementById("input_generate_btn").click();

}


function customer_symbol(){
    var x = document.getElementById("supply_currency").value;
//    document.getElementById("Direct_cost_symbol").innerHTML =  x;
   document.getElementById("mrp_symbol").innerHTML = x; 
   if (x == "₹"){
       document.getElementById("supply_currency1").selectedIndex = "1";
   }
   else  if (x == "AED"){
       document.getElementById("supply_currency1").selectedIndex = "0";
   }
   else  if (x == "$"){
       document.getElementById("supply_currency1").selectedIndex = "2";
   }

}


$('#display_col_table').on('click',function(){
    let tableName = $(this).text();
    if(tableName == 'View Full Table'){
        $(this).html('<b>View Partial Table</b>');
        $('#main_table_div').css("width", "90%");
    }else{
        $(this).html('<b>View Full Table</b>');
        $('#main_table_div').css("width", "50%");
    }
    $('.display_col').toggle();
    
})


function customer_value() {
  document.getElementById("number6").value =
    document.getElementById("target_customer").value;
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
    document.getElementById("form_003").style.display = "none";
    var dv1 = document.getElementById("edit_inputs").value = "Yes";

}



// $(".input_onchange").on('change', function(){    // 2nd (A)
//     // do your code here
//     // It will specifically called on change of your element
//     document.getElementById("input_generate_btn").click();

// });


function cost_Price(){

    
    var mrp = document.getElementById("mrp");
    var cost_price = document.getElementById("cost_price");

    mrp.style.border = "4px solid sandybrown";
    cost_price.style.border = "4px solid cornflowerblue";

    var sum_margin_per = 0, i;

    for(i=1 ; i<7; i++){
        x = document.getElementById("margin_percentage" + i).value;
        
        sum_margin_per = sum_margin_per + parseFloat(x) ;
 
    }

    cal_cost_price = Math.round( parseFloat(mrp.value) * ((100 - sum_margin_per)/100));

    cost_price.value = cal_cost_price;

}

function mrp(){

    
    var mrp = document.getElementById("mrp");
    var cost_price = document.getElementById("cost_price");
    var sum_margin_per = 0, i;

    mrp.style.border = "4px solid cornflowerblue";
    cost_price.style.border = "4px solid sandybrown";

    for(i=1 ; i<7; i++){
        x = document.getElementById("margin_percentage" + i).value;
        
        sum_margin_per = sum_margin_per + parseFloat(x) ;
 
    }

    console.log(sum_margin_per);

    cal_mrp = Math.round(parseFloat(cost_price.value) *(100/(100-sum_margin_per)));

    mrp.value = cal_mrp;

}