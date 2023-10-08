function dathang(){
    document.getElementById('buy').style.display="block";

}
function ok(){
    const number = document.getElementById('number').value;
    const code = document.getElementById('code').value;
    const giamgia = document.getElementById('giamgia')
    
    const soluong = document.getElementById('soluong').innerText=("Số lượng: " + number)
    document.getElementById('tong').innerText=("Tổng: " + number * 100000 + " VNĐ")
    if(code == "LAMVANFREEFIRE"){
        giamgia.innerText="Giảm giá: -50000 VNĐ"
        document.getElementById('tong').innerText=("Tổng: " + (number * 100000 - 50000) + " VNĐ")
    }
}