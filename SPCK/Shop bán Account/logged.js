function app(){
    if(localStorage.getItem("logged") =="true"){
        console.log("đ")
        document.getElementById("join").classList.add("hide")
        document.querySelector(".logged").classList.remove("hide")

    }else{
        
    }
    document.querySelector(".my-name").innerHTML = localStorage.getItem("username")

}
app()

