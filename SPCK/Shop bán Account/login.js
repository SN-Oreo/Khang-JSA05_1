
function login(){
    const Username = document.getElementById('username').value;
    const Password = document.getElementById('password').value;
    let getPassword = localStorage.getItem("password")
    let getUsername = localStorage.getItem("username")
    if(Username==getUsername && Password==getPassword){
        window.location.href='index.html'
        localStorage.setItem("logged", true)
    }else{
        document.getElementById('Loi').style.opacity ="1"
        document.getElementById('loi').style.opacity ="1"
        document.getElementById('loi1').style.opacity ="1"
    }
    
}