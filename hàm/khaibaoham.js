// Function declaration 
/**function tên biến(thamSo1, thamSo2) {
  // Khối lệnh xử lý
  return giaTriTraVe;
} 
  */
 function tong(a=0,b=0){
    return a+b;
 }
 // gọi hàm lại
 console.log("kết quả của phép cộng là ",tong(9,10));
 // Function expression
 /**Cú pháp: let tên biến  = function(tham số 1, tham số 2){
    //Thân hàm 
    //return giá trị trả về;         
   }
 */
    let hieu=function(a,b){
        return a-b;        
    }
    console.log("kết quả là "+hieu(9,5));


    //  bài tập cho ng chơi nhập số vào tính toán cộng trừ nhân chia
    let a=parseFloat(prompt('mời bạn nhập số a'));
    let b=parseFloat(prompt('mời bạn nhập số b'));
    let pheptoan=(prompt('Mời bạn nhập phép toán +;-;*;/'));
    while(Number.isNaN(a)||Number.isNaN(b)||(pheptoan!=="+"&&pheptoan!=="-"&&pheptoan!=="*"&&pheptoan!=="/")){
        alert('mời bạn nhập lại')
        a=parseFloat(prompt('mời bạn nhập số a'));
         b=parseFloat(prompt('mời bạn nhập số b'));
          pheptoan=(prompt('Mời bạn nhập phép toán +;-;*;/'));
    }
    console.log(`2 số bạn đã nhập là a=${a},b=${b}`);
    let cong=function(a,b){
        return a+b;
    }
    let tru=function(a,b){
        return a-b;
    }
    let nhan=function(a,b){
        return a*b; 
    }
    let chia=function(a,b){
        if (b===0){
            return "không thể chia cho 0 được"
        }
        return a/b;
    }
    if (pheptoan === "+") {
  alert(`Tổng 2 số a,b = ` + cong(a, b));
} else if (pheptoan === "-") {
  alert(`Hiệu 2 số a,b = ` + hieu(a, b));
} else if (pheptoan === "*") {
  alert(`Tích 2 số a,b = ` + nha(a, b));
} else if (pheptoan === "/") {
  alert(`Thương 2 số a,b = ` + chia(a, b));
} else {
  alert("Phép toán không hợp lệ! Vui lòng nhập một trong các ký hiệu: +, -, *, /");
}
// Sự khác nhau giữa Function declaration  và Function expression
showMessage() // gọi hàm trước hay sau vẫn chạy
function showMessage(){
  console.log("chào mừng bạn đến với js  ");
}
function showMessage2(){
  console.log("chào mừng bạn đến với js ")
}
showMessage2() // gọi hàm sau mới chạy được



// Arrow function ( hàm mũi tên)
// Cú pháp : tên biến  = (tham số1, tham số 2) => tham số 1 + tham số 2; với trường hợp phức tạp thêm dấu {}
 let Arrow =(a,b)=> a*b;
 console.log(Arrow(3,4));
 // vd 
 let congNhan = (a, b) => {
  let product = a * b;
  let sum = a + b;
  return  product+ sum ;
}
console.log(congNhan(3,4))

    