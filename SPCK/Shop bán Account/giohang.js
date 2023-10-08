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
function anItem3(){
    const Item3 = document.getElementById('item3')
    Item3.style.backgroundColor=""
    Item3.style.color=""
    Item3.style.cursor=""
}
function gioHang(){
    const Item1 = document.getElementById('item1')
    document.getElementById('bar-giohang').style.opacity="1"
    document.getElementById('bar-dathanhtoan').style.opacity="0"
    document.getElementById('bar-giaohang').style.opacity="0"
    document.getElementById('in-giohang').style.display="block"
    document.getElementById('in-dathanhtoan').style.display="none"
    document.getElementById('in-giaohang').style.display="none"
    Item1.style.backgroundColor="rgba(40, 40, 40)"
    Item1.style.color="rgb(183, 244, 255)"
    Item1.style.cursor="default"
    return(anItem2(), anItem3())
}
function daThanhToan(){
    const Item2 = document.getElementById('item2')
    document.getElementById('bar-giohang').style.opacity="0"
    document.getElementById('bar-dathanhtoan').style.opacity="1"
    document.getElementById('bar-giaohang').style.opacity="0"
    document.getElementById('in-giohang').style.display="none"
    document.getElementById('in-dathanhtoan').style.display="block"
    document.getElementById('in-giaohang').style.display="none"
    Item2.style.backgroundColor="rgba(40, 40, 40)"
    Item2.style.color="rgb(183, 244, 255)"
    Item2.style.cursor="default"
    return(anItem1(),anItem3())
}
function giaoHang(){
    const Item3 = document.getElementById('item3')
    document.getElementById('bar-giohang').style.opacity="0"
    document.getElementById('bar-dathanhtoan').style.opacity="0"
    document.getElementById('bar-giaohang').style.opacity="1"
    document.getElementById('in-giohang').style.display="none"
    document.getElementById('in-dathanhtoan').style.display="none"
    document.getElementById('in-giaohang').style.display="block"
    Item3.style.backgroundColor="rgba(40, 40, 40)"
    Item3.style.color="rgb(183, 244, 255)"
    Item3.style.cursor="default"
    return(anItem1(), anItem2())
}