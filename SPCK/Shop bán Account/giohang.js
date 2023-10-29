function anItem1(){
    const Item1 = document.getElementById('item1')
    Item1.style.backgroundColor=""
    Item1.style.color=""
    Item1.style.cursor=""
}
function anItem2(){
    const Item2 = document.getElementById('item2')
    Item2.style.backgroundColor=""
    Item2.style.color=""
    Item2.style.cursor=""
}

function gioHang(){
    const Item1 = document.getElementById('item1')
    document.getElementById('bar-giohang').style.opacity="1"
    document.getElementById('bar-dathanhtoan').style.opacity="0"
    document.getElementById('in-giohang').style.display="block"
    document.getElementById('in-dathanhtoan').style.display="none"
    Item1.style.backgroundColor="rgba(40, 40, 40)"
    Item1.style.color="rgb(183, 244, 255)"
    Item1.style.cursor="default"
    return(anItem2())
}
function daThanhToan(){
    const Item2 = document.getElementById('item2')
    document.getElementById('bar-giohang').style.opacity="0"
    document.getElementById('bar-dathanhtoan').style.opacity="1"
    document.getElementById('in-giohang').style.display="none"
    document.getElementById('in-dathanhtoan').style.display="block"
    Item2.style.backgroundColor="rgba(40, 40, 40)"
    Item2.style.color="rgb(183, 244, 255)"
    Item2.style.cursor="default"
    return(anItem1())
}
function bigGioHang(){
    box = document.createElement("div")
    box.classList.add("box")

    let account = document.createElement("div")
    account.classList.add("account")

    let btn = document.createElement("button")
    btn.classList.add("accept")
    btn.innerHTML = "Thanh Toán"

    if(!localStorage.getItem("store-id") == ""){
    
        let img = document.createElement("img")
        img.classList.add("account-img")
        img.setAttribute("src", localStorage.getItem("store-img"))

        let id = document.createElement("h2")
        id.classList.add("account-id")
        id.innerText = "ID: " + localStorage.getItem("store-id")

        let rank = document.createElement("h3")
        rank.classList.add("account-rank")
        rank.innerText = "Rank: " + localStorage.getItem("store-rank")

        let price = document.createElement("h3")
        price.classList.add("account-price")
        price.innerText = "Giá: " + localStorage.getItem("store-prices") + " VNĐ"

    


        account.appendChild(img)
    
        box.appendChild(id)
        box.appendChild(rank)
        box.appendChild(price)
    
    }else if(localStorage.getItem("store-id") == ""){
        document.querySelector(".account").style.display = "none"
    }


    box.appendChild(btn)
    account.appendChild(box)
    document.getElementById("in-giohang").appendChild(account)
}
bigGioHang()

let accept = document.querySelector(".accept")
accept.addEventListener("click", setItem)
function setItem(){

    localStorage.setItem("add-img", localStorage.getItem("store-img"))
    localStorage.setItem("add-id", localStorage.getItem("store-id"))
    localStorage.setItem("add-rank", localStorage.getItem("store-rank"))
    localStorage.setItem("store-img", "")
    localStorage.setItem("store-id", "")
    localStorage.setItem("store-rank", "")
    localStorage.setItem("store-prices", "")
    
}
function bigDaThanhToan(){
    let a_account = document.createElement("div")
    a_account.classList.add("account")
    
    a_box = document.createElement("div")
    a_box.classList.add("a-box")
    
    let a_img = document.createElement("img")
    a_img.classList.add("a-account-img")
    a_img.setAttribute("src", localStorage.getItem("add-img"))

    let a_id = document.createElement("h2")
    a_id.classList.add("a-account-id")
    a_id.innerText = "ID: " + localStorage.getItem("add-id")

    let a_mk = document.createElement("h2")
    a_mk.innerHTML = 

    a_account.appendChild(a_img)
    a_account.appendChild(a_box)
    a_box.appendChild(a_id)

    document.getElementById("in-dathanhtoan").appendChild(a_account)
}
bigDaThanhToan()