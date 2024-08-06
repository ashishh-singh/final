$("#mrp").on("keyup", function () {
  cost_Price();
});
$("#cost_price").on("keyup", function () {
  mrp();
});

function volume() {
  var x = document.getElementById("container_size").value;

  if (x == 20) document.getElementById("volume_cartoon").value = "23,50,080";
  else {
    document.getElementById("volume_cartoon").value = "47,00,160";
  }
}

function ShowHideDiv(edit_inputs) {
  var dv = document.getElementById("input_table_001");
  if (edit_inputs.value == "Yes") {
    dv.style.display = "block";
    edit_inputs.value = "No";
  } else {
    dv.style.display = "none";
    edit_inputs.value = "Yes";
  }
}

$("#display_col_table").on("click", function () {
  let tableName = $(this).text();
  if (tableName == "View Full Table") {
    $(this).html("<b>View Partial Table</b>");
  } else {
    $(this).html("<b>View Full Table</b>");
  }
  $(".display_col").toggle();
});

function ShowHideDiv3(edit_inputs) {
  var dv = document.getElementById("input_table_001");
  var dv1 = document.getElementById("edit_inputs");

  dv.style.display = "none";
  dv1.value = "Yes";
}

function display_container() {
  document.getElementById("form_001").style.display = "none";
  document.getElementById("form_003").style.display = "none";
  document.getElementById("form_002").style.display = "block";
  document.getElementById("tool_heading").innerHTML =
    document.getElementById("btn_002").textContent;
}

function display_container1() {
  document.getElementById("form_002").style.display = "none";
  document.getElementById("form_003").style.display = "none";
  document.getElementById("form_001").style.display = "block";

  document.getElementById("tool_heading").innerHTML =
    "6-level Organization Structure";
}

function display_container2() {
  document.getElementById("form_002").style.display = "none";
  document.getElementById("form_001").style.display = "none";
  document.getElementById("form_003").style.display = "block";

  document.getElementById("tool_heading").innerHTML = "Supply Chain Structure";
}

function symbol_display() {
  var x = document.getElementById("c_currency").value;
  document.getElementById("target_currency_symbol").value = "1 " + x + "  = ";
}

function symbol_display2() {
  var x = document.getElementById("c_currency2").value;
  var y = document.querySelectorAll(".dest_con_charges");

  for (var i = 0; i < y.length; i++) {
    y[i].innerHTML = x;
  }

  document.getElementById("target_currency_symbol2").value = "1" + x;
}

function customer_value() {
  document.getElementById("number6").value =
    document.getElementById("target_customer").value;
}

function customer_symbol() {
  var x = document.getElementById("supply_currency").value;

  if (x == "₹") {
    document.getElementById("supply_currency1").selectedIndex = "1";
  } else if (x == "AED") {
    document.getElementById("supply_currency1").selectedIndex = "0";
  } else if (x == "$") {
    document.getElementById("supply_currency1").selectedIndex = "2";
  }
}

function cost_Price() {
  var mrp = document.getElementById("mrp");
  var cost_price = document.getElementById("cost_price");

  mrp.style.border = "4px solid sandybrown";
  cost_price.style.border = "4px solid cornflowerblue";

  var sum_margin_per = 0,
    i;

  for (i = 1; i < 7; i++) {
    x = document.getElementById("margin_percentage" + i).value;

    sum_margin_per = sum_margin_per + parseFloat(x);
  }

  cal_cost_price = Math.round(
    parseFloat(mrp.value) * ((100 - sum_margin_per) / 100)
  );

  cost_price.value = cal_cost_price;
}

function mrp() {
  var mrp = document.getElementById("mrp");
  var cost_price = document.getElementById("cost_price");
  var sum_margin_per = 0,
    i;

  mrp.style.border = "4px solid cornflowerblue";
  cost_price.style.border = "4px solid sandybrown";

  for (i = 1; i < 7; i++) {
    x = document.getElementById("margin_percentage" + i).value;

    sum_margin_per = sum_margin_per + parseFloat(x);
  }

  console.log(sum_margin_per);

  cal_mrp = Math.round(
    parseFloat(cost_price.value) * (100 / (100 - sum_margin_per))
  );

  mrp.value = cal_mrp;
}


function limit_teamsize(){
  var x = Number( document.getElementById('team_size').value);
  if (x > 10000){
    alert("Please enter value less than 10,000")
  }
}


function limit_estb_amt(){
  var x = Number( document.getElementById('estb_amount').value);
  if (x > 1000000){
    alert("Please enter value less than 10,00,000")
  }
}