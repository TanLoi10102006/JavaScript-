// Hàm isNan,Number
// hammf Number(value) --> chuyển valu sang số
//--> Nếu k chuyển được trả về NaN
let str = " 123";
console.log(typeof str);
let num= Number(str);
console.log(num);
console.log(typeof num);
let so = Number(prompt("mời bạn nhập vào 1 số "));
console.log(so);
// Hàm isNaN Nếu chuyển đổi sang số được --> trả về false
//           Nếu k chuyển đổi sang số được --> trả về true
let a ="123";
console.log(isNaN(a));
let b = Number(true);
console.log(b);
console.log(typeof b); 
console.log(isNaN(b));
// Hàm Number.isNaN: nếu kết quả ra NaN thì trả về true k thì trả về false;
console.log(Number.isNaN("abc "/"hbc")); // NaN --> true