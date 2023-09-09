let products = {
    data: [
        {
            productName: "Mid Backpack",
            price: "400000",
            image: "https://product.hstatic.net/1000365849/product/balo_luoi_be_1_c4b57120089f4d0aae9abe982239789a_master.jpg"
        },

        {
            productName: "Slash Backpack",
            price: "500000",
            image: "https://product.hstatic.net/1000365849/product/slash_backpack_nau_1_cb0280190ff04f31b9fe581c5802b1fc_master.jpg"
        },

        {
            productName: "Mini Square",
            price: "400000",
            image: "https://product.hstatic.net/1000365849/product/mini_square_hong_1_46cdb167d7ca42d39d51e4892457737d_master.jpg"
        },

        {
            productName: "Flip_Backpack",
            price: "400000",
            image: "https://product.hstatic.net/1000365849/product/flip_backpack__1__b0c4b95520b54afa8d3ab4b29673b75d_master.jpg"
        },

        {
            productName: "New Mini Backpack",
            price: "500000",
            image: "https://product.hstatic.net/1000365849/product/new_mini_backpack_hong_1_51a580ce4a7a483b883e95e592d921c5_master.jpg"
        },

        {
            productName: "New Original Backpack",
            price: "500000",
            image: "https://product.hstatic.net/1000365849/product/new_ori_cream_1.5_1bcd5cbc223947cfbdab487cc0285c0b_master.jpg"
        },
    ]
}



for(let i of products.data){

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", i.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText =i.productName;
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText =  "Giá: " +  " $" + i.price;
    container.appendChild(price)

    let input = document.createElement("button")
    input.classList.add("Add")
    input.innerText = "Đặt hàng"
    container.appendChild(input)

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

document.getElementById("search").addEventListener("click", () =>{
    let searchInput = document.getElementById("search-input").value.toUpperCase()
    let cards = document.querySelectorAll(".card")
    let productsName = document.querySelectorAll(".product-name")
    let prices = document.querySelectorAll("h6")

    productsName.forEach((items, index) =>{
        if (items.innerText.includes(searchInput)){
            cards[index].classList.remove("hide")
        }else{
            cards[index].classList.add("hide")
        }
    })
    prices.forEach((items, index) =>{
        if (items.innerText.includes(searchInput)){
            cards[index].classList.remove("hide")
        }else{
            cards[index].classList.add("hide")
        }
    })
})



