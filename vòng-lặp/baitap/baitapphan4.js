// bài tập: sử dụng hàm viết chương trình nhập vào số nguyên n,in ra kết quả n!
// dùng vòng lập for và while 
function tinhgiaithuong(n){
    let gt=1;
    for(let i=1;i<=n;i++){
    gt*=i;
    }
    return gt;
}
function tinhgiaithuawhile(n){
    let gt=1;
    let i=1;
    while(i<=n){
        gt*=i;
        i++

    }
    return gt;

}
let n=parseInt(prompt("mời bạn nhập số nguyên"));
while(Number.isNaN(n)||n<=0||n%1!==0){
    alert("bạn đã nhập sai vui lòng nhập lại");
    n=parseInt(prompt("mời bạn nhập số nguyên"));
}
console.log(`bạn đã nhập ${n} kết quả là  `+tinhgiaithuong(n));
console.log(tinhgiaithuawhile(n));


// bài tập giải phương trình bậc 2
function delta(a,b,c){
    return b**2-4*a*c;
}
function thongbao(thongBao) {
    while (true) {
        let nhapso = parseInt(prompt(thongBao));

        if (!isNaN(nhapso) && Number.isInteger(nhapso)) {
            return nhapso;
        } else {
            alert(" Lỗi: Vui lòng nhập một *số nguyên hợp lệ*!");
        }
    }
}


function giaiphuongtrinha(a,b,c){
    if (a===0){
        return "Không phải phương trình bậc 2 "
    } 
    let d=delta(a,b,c);
    if(d>0){
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        return `phương trình có 2 nghiệm là x1=${x1},x2=${x2}`;
    }else if (d===0){
         let x = -b / (2 * a);
         return `phương trình có nghiệm kép x=${x}`
    }else {
        return `phương trình vô nghiệm`
    }
    }
    function nhapsoVaGiai() {
    let a = thongbao("Nhập số nguyên a:");
    let b = thongbao("Nhập số nguyên b:");
    let c = thongbao("Nhập số nguyên c:");
    alert(`Bạn đã nhập:\na = ${a}, b = ${b}, c = ${c}`);
    let ketQua = giaiphuongtrinha(a, b, c);
    alert(ketQua);
}
nhapsoVaGiai()
 



