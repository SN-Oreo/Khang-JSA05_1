window.onload = function(){
    document.getElementById("submit").addEventListener("click", register)
}
function register(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    if(username === "" || password ==="" || email === "" || age === ""){
        alert("Vui lòng điền đầy đủ thông tin")
    }else{
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        localStorage.setItem("email", email)
        localStorage.setItem("age", age)
        location.href="show.html"
    }
}