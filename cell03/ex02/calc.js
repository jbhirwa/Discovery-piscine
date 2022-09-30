// This function clear all the values
function clearScreen() {
    document.getElementById("input-one").value = "";
    document.getElementById("input-two").value = "";

}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var a = document.getElementById("input-one").value;
    var b = document.getElementById("input-two").value;
    var op = document.getElementById("operator").value;
   // if (op == )
    //var q = eval(p);
    console.log(a);
    console.log(b);
    console.log(op);

    //document.getElementById("result").value = q;
}