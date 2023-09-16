
function nhan(){
    document.getElementById("all").style.display = "block"
    let username = localStorage.getItem("username")
    let password = localStorage.getItem("password")
    let email = localStorage.getItem("email")
    let age = localStorage.getItem("age")

    document.getElementById("show-u").innerHTML = username
    document.getElementById("show-p").innerHTML = password
    document.getElementById("show-e").innerHTML = email
    document.getElementById("show-a").innerHTML = age
}
