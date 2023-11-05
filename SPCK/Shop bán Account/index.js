
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






document.getElementById("input-button").addEventListener("click", napTien)
function napTien(){
    let set = localStorage.getItem("logged")
    if(set == "true"){

        let maThe = document.querySelector(".m").value
        let soSeri = document.querySelector(".s").value
        let nhaMang = document.querySelector(".nha-mang").value
        let huhu = Number(document.querySelector(".so-tien").value)
        let haha = Number(localStorage.getItem("money"))

        if(maThe == "" || soSeri == "" || huhu == "0" || nhaMang == "0"){
            alert("Vui lòng nhập đẩy đủ")
        }else{
            localStorage.setItem("money", haha + huhu)
        }
        location.href = "index.html"
    }else{
        alert("Bạn chưa đăng nhập")
    }
    
    
}