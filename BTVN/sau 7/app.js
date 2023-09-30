var equation = () =>{

    //lấy số nè
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;


    //giải phương trình nè
    if(b>=0){
        console.log(a + "x + " + b + " = 0")
        console.log("<=> " + a + "x = " + -b)
        console.log("<=> x = " + -b/a)
        console.log("Vậy S={" + -b/a +"}")
    }else{
        console.log(a + "x - " + Math.abs(b) + " = 0")
        console.log("<=> " + a + "x = " + -b)
        console.log("<=> x = " + -b/a)
        console.log("Vậy S={" + -b/a +"}")
    }
}






// bài 2


var giaiTamGiacVuong = () =>{

    //lấy số nè
    const cgv1 = document.getElementById("cgv1").value;
    const cgv2 = document.getElementById("cgv2").value;

    if(isNaN(cgv1) || isNaN(cgv2) || cgv1 === "" || cgv2 === ""){
        alert("vui lòng nhập giá trị là số bất kì vào mỗi cạnh tương ứng để tao thực hiện phép tính!!")
    }else{
    //Tính cạnh huyền nè
        let canhHuyen = Math.sqrt((cgv1*cgv1) + (cgv2*cgv2))


    //Tính đường cao nè
        let AH = Math.sqrt(((cgv1)*(cgv1)*(cgv2)*(cgv2))/((cgv1)*(cgv1)+(cgv2)*(cgv2)))
    

    //Tính 2 góc B và C nè
        let gocB = Math.asin(cgv2/canhHuyen)* 180/ Math.PI
        let gocC = Math.asin(cgv1/canhHuyen)* 180/ Math.PI


    //console.log nè
        console.log("Cạnh huyền BC là: " + canhHuyen)
        console.log("Đường cao AH là: " + AH)
        console.log("Góc B là: " + gocB)
        console.log("Góc C là: " + gocC)
    }
}


