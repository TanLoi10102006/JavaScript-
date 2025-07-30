// Function calling 
// cấu trúc hàm gọi hàm: function A() {
  // ...
// }

// function B() {
//   A(); // gọi hàm A bên trong hàm B
// }
// hàm thực hiện phép tính cộng 
function cong(a, b) {
  return a + b;
}
// hàm thực hiện phép nhân 
function nhan(x,y){
    return x*y;
}
// Hàm gọi hàm khác để thực hiện phép tính cộng và nhân
function congNhan(number1,number2,number3){
    // gọi hàm tính tổng
    let sum=cong(number1,number2);
    // gọi hàm nhân để tính tích sum*number3
    let product=nhan(sum,number3);
    //trả về kết quả 
    return product; 
}
console.log(congNhan(2,3,4));