function login(){
    const Username = document.getElementById('username').value;
    const Password = document.getElementById('password').value;
    if(Username=="admin" && Password=="admin123"){
        window.location.href='index.html'
    }else{
        document.getElementById('Loi').style.opacity ="1"
        document.getElementById('loi').style.opacity ="1"
        document.getElementById('loi1').style.opacity ="1"
        // return(hu())
    }
    
}