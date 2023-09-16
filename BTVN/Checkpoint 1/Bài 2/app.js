window.onload = function(){
    document.getElementById("inra").addEventListener("click", create)
}

function create(){
    let cao = document.getElementById("nhap").value;
    for(let i = 1; i <= cao; i++){
        
        for(let air = cao; air > i; air--){
            document.write("_  ")
        }
        for(let fill = 1; fill <= 2*i-1; fill++){
            if(fill == 1 || fill == 2*i-1 || i == cao || i == 1){
                document.write("* ")
            }else{
                document.write("_  ")
            }
            
        }
        document.write("<br>")
    }
}