function signup(){
    const Username = document.getElementById('username').value;
    const Email = document.getElementById('email').value;
    const Password = document.getElementById('password').value;
    const Confirm_password = document.getElementById('confirm password').value;

    // errol:
    // 0:
    let errolUsername = document.querySelector(".red-username")
    let errolEmail = document.querySelector(".red-email")
    let errolPassword = document.querySelector(".red-password")
    let errolCPassword = document.querySelector(".red-cpassword")

    //check

    if(Username=="" || Email=="" || Password=="" || Confirm_password==""){
        if(Username==""){
            errolUsername.classList.remove("hide-errol")
        }else{
            errolUsername.classList.add("hide-errol")
        }
        if(Email==""){
            errolEmail.classList.remove("hide-errol")
        }else{
            errolEmail.classList.add("hide-errol")
        }
        if(Password==""){
            errolPassword.classList.remove("hide-errol")
        }else{
            errolPassword.classList.add("hide-errol")
        }
        if(Confirm_password==""){
            errolCPassword.classList.remove("hide-errol")

        }else{
            errolCPassword.classList.add("hide-errol")

        }
    }else{
        if(!Username=="" || !Email=="" || !Password=="" || !Confirm_password==""){
            errolUsername.classList.add("hide-errol")
            errolEmail.classList.add("hide-errol")
            errolPassword.classList.add("hide-errol")
            errolCPassword.classList.add("hide-errol")
            
        }
        if(Password === Confirm_password){
            localStorage.setItem("username", Username)
            localStorage.setItem("password", Password)
            localStorage.setItem("email", Email)
            localStorage.setItem("money", 0)
            alert("Đăng ký thành công")
            
            // location.href="Login.html"
        }else{
            // Mật khẩu nhập lại không khớp
        }
        


    }

    
    
}

