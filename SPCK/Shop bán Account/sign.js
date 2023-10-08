function signup(){
    const Username = document.getElementById('username').value;
    const Email = document.getElementById('email').value;
    const Password = document.getElementById('password').value;
    const Confirm_password = document.getElementById('confirm password').value;

    // errol:
    // 0:
    const Errol = document.getElementById('Loi')
    const errol = document.getElementById('loi')
    // 1
    const Errol1 = document.getElementById('Loi1')
    const errol1 = document.getElementById('loi1')
    // 2
    const Errol2 = document.getElementById('Loi2')
    const errol2 = document.getElementById('loi2')
    // 3
    const Errol3 = document.getElementById('Loi3')
    const errol3 = document.getElementById('loi3')

    //check

    if(Username=="" || Email=="" || Password=="" || Confirm_password==""){
        if(Username==""){
            Errol.style.opacity="1"
            errol.style.opacity="1"
        }else{
            Errol.style.opacity="0"
            errol.style.opacity="0"
        }
        if(Email==""){
            Errol1.style.opacity="1"
            errol1.style.opacity="1"
        }else{
            Errol1.style.opacity="0"
            errol1.style.opacity="0"
        }
        if(Password==""){
            Errol2.style.opacity="1"
            errol2.style.opacity="1"
        }else{
            Errol2.style.opacity="0"
            errol2.style.opacity="0"
        }
        if(Confirm_password==""){
            Errol3.style.opacity="1"
            errol3.style.opacity="1"
        }else{
            Errol3.style.opacity="0"
            errol3.style.opacity="0"
        }
    }else{
        if(!Username==""){
            Errol.style.opacity="0"
            errol.style.opacity="0"
        }
        if(!Email==""){
            Errol1.style.opacity="0"
            errol1.style.opacity="0"
        }
        if(!Password==""){
            Errol2.style.opacity="0"
            errol2.style.opacity="0"
        }
        if(!Confirm_password==""){
            Errol3.style.opacity="0"
            errol3.style.opacity="0"
        }
        if(Password === Confirm_password){
            alert("Đăng ký thành công")
            window.location.href="Login.html"
        }else{
            // Mật khẩu nhập lại không khớp
        }
    }

    
    
}

