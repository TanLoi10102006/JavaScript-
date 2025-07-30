// 18. truthy and falsy valuse
// Chúng ta cũng có thể ép ngược lại từ số --> chuỗi 
let a=123;
console.log(typeof a);
let b= String(a);
console.log(typeof b);
console.log("giá trị của b",b);
// giá trị falsy khi chuyển đổi sang bool sẽ là false
// false 0,-0,0n,"",null,undefined,NaN
let c = Boolean(false);
console.log(c);
console.log(typeof c);
// vd kiểm tra 1 biến đã được gán giá trị hay underfined
let salary;
console.log(salary);
if(salary){
    console.log("Salary is derfined")
}else{
    console.log("Salary is underfined");
}
// vd 
let value = "Hello";
console.log(typeof value);

if (value) {
  console.log("Được coi là true"); // sẽ chạy dòng này
} else {
  console.log("Được coi là false");
}