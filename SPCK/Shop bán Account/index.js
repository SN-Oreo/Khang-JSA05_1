function onNapThe(){
    document.getElementById('form-napthe').style.display ="block"
    document.getElementById('form-bxh').style.display ="none"
    document.getElementById('form-phanqua').style.display="none"
}
function onBxh(){
    document.getElementById('form-napthe').style.display ="none"
    document.getElementById('form-bxh').style.display ="block"
    document.getElementById('form-phanqua').style.display="none"
    // document.getElementById('form-phanqua').style.display="none"
}
function onPhanQua(){
    document.getElementById('form-napthe').style.display ="none"
    document.getElementById('form-bxh').style.display ="none"
    document.getElementById('form-phanqua').style.display="block"
}
function reset(){
    
}
let cancel = document.querySelectorAll(".modal-cancel")
for (let index = 0; index < cancel.length; index++) {
    const element = cancel[index];
    element.addEventListener("click", function(){
        document.querySelector(".modal").classList.remove("show")


    })
}