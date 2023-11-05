function start(){
    document.querySelector(".name").innerHTML= localStorage.getItem("username")
    document.querySelector(".password").value = localStorage.getItem("password")
}
start()


document.querySelector(".btn-change-name").addEventListener("click", changeName)
function changeName(){
    document.querySelector(".modal-name").classList.add("show")
}


document.querySelector(".enter-name").addEventListener("click", enterName)
function enterName() {
    let newName = document.querySelector(".new-name").value
    if(newName == ""){
        alert("Error")
    }else{
        localStorage.setItem("username", newName)
        location.href= "setting.html"
    }
}


document.querySelector(".unchange").addEventListener("click", unChange)
function unChange(){
    document.querySelector(".modal-name").classList.remove("show")
    document.querySelector(".modal-password").classList.remove("show")
}


document.querySelector(".show-password").addEventListener("click", showPassword)
function showPassword(){
    if(document.querySelector(".password").type == "text"){
        document.querySelector(".password").type = "password"
    }else{
        document.querySelector(".password").type = "text"
    }
}


document.querySelector(".btn-change-password").addEventListener("click", changePassword)
function changePassword(){
    document.querySelector(".modal-password").classList.add("show")
}


document.querySelector(".unchangep").addEventListener("click", unChangep)
function unChangep(){
    document.querySelector(".modal-password").classList.remove("show")
}


document.querySelector(".enter-password").addEventListener("click", enterPassword)
function enterPassword() {
    let newPassword = document.querySelector(".new-password").value
    if(newPassword == ""){
        alert("Error")
    }else{
        localStorage.setItem("password", newPassword)
        location.href= "setting.html"
    }
}