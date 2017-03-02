function myFunction() {
    var str = document.getElementById("two").innerHTML;
    var res = str.replace("Gunnar", "Jakob");
    document.getElementById("two").innerHTML = res;
}
function myFunction2() {
    var x = document.getElementById("three");
    x.remove();
}
function myFunction3() {
    var d = document.getElementById("one");
    d.className += " addClass";
}