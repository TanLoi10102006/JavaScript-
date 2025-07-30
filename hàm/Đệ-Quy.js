// Đệ quy trong js 
// Tính n!=n*(n-1)!....1
function giaiThua(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * giaiThua(n - 1);
  }
}
// gọi hàm
console.log(giaiThua(5)); // Kết quả: 120
// Dãy số Fibonacci :
function f(n){
    if(n<=2){
        return 1; 
    } else{
        return f(n-1)+f(n-2);
    }
}
// gọi gàm
console.log(f(10))//kq :55
