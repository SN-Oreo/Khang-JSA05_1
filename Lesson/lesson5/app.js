

document.addEventListener("submit", function ()    {
    // var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username === 'username' && password === "password"){

        localStorage.setItem("username", username);

        var greetingElement = document.createElement('p');
        greetingElement.textContent = "Xin Chào " + username + "!";
        document.body.appendChild(greetingElement);
    }else{
        alert("hmmmm")
    }
})

document.addEventListener('DOMContentLoaded', function(){
    var username = localStorage.getItem('username');
    if(username){
        var greetingElement = document.createElement('p');
        greetingElement.textContent = "Xin Chào " + username + "!";
        document.body.appendChild(greetingElement);
    }
})