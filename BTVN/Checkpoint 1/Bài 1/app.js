window.onload = function(){
    document.getElementById('submit').addEventListener("click", tinhGT)
}
function tinhGT(){
    
    let n = document.getElementById("nhap").value;
    let giaiThua = 1;
    for (let i = 1; i <= n; i++) {
        giaiThua = giaiThua*i;
    }
    document.getElementById("demo").innerHTML = "Giai thừa của " + n + " " + "là: " + giaiThua;
}


