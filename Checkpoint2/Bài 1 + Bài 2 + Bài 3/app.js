function save(){
    const input = document.getElementById("dulieu").value;
    localStorage.setItem("input", input)
    let show = localStorage.getItem("input")
    document.getElementById("text").innerText = show
}
function remove(){
    localStorage.clear()
    document.getElementById("dulieu").value = ""
    return(save())
}

function check(){
    let check = localStorage.getItem("input")
    if(check === ""){
        alert("chưa có dữ liệu gì trong LocalStorage")
    }else{
        alert("Dữ liệu của bạn là: " + check)
    }
}