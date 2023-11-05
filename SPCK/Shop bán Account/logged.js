function app(){
    if(localStorage.getItem("logged") =="true"){
        document.getElementById("join").classList.add("hide")
        document.querySelector(".logged").classList.remove("hide")

    }else{
        
    }
    document.querySelector(".my-name").innerHTML = localStorage.getItem("username")

}
app()

function hide(){
    document.querySelector(".h3-money").innerHTML = "money: " + localStorage.getItem("money") + " VNĐ"

    
}
hide()


//log out

document.querySelector(".log-out").addEventListener("click", logOut)
function logOut(){
    localStorage.setItem("logged", false)
    location.href = "index.html"
}

document.querySelector(".my-setting").addEventListener("click", openSetting)
function openSetting(){
    location.href= "setting.html"
}