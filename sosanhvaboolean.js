/** Toán tử so sánh 
 ==
 !=
 >
 <
 >=
 <=
 
 */
let numbera = 7;
let numberb = 5;
let numberc = "7";
console.log(typeof numbera);
console.log(typeof numberb);
console.log(typeof numberc);
// các phép toán tử so sánh
console.log(numbera > numberb);
console.log(numbera < numberb);
console.log(numbera <= numberb);
console.log(numbera >= numberb);

// So sánh bằng == (không quan tâm đến kiểu dữ liệu của biến )
console.log(numbera == numberc);
// So sánh tuyệt đối === so sánh giá trị và kiểu dữ liệu
console.log(numbera === numberc);
// khác nhau != (không quan tâm đến kiểu dữ liệu của biến )
console.log(numbera != numberb);
console.log(numberc != numberb);
// khác nhau !== (so sánh sự khác nhau giữ giá trị và kiểu dữ liệu)
console.log(numberc !== numberb);

//////////////////////////
var a = 9;
var b = 9;
b++;

if (a == b) {
  console.log("điều kiện đúng :", b, a);
} else {
  console.log("điều kiện sai ", b, a);
}
// so sánh chuỗi

var name1 = "ĐOÀN TẤN LỢI";
var name2 = "Đoàn Tấn Lợi";
if (name1 == name2) {
  console.log("điều kiện đúng ");
} else {
  console.log("điều kiện sai ");
}
/**
 * Kiểu dữ liệu Boolean
 */
var c = 9;
var d = 20;
//  var isSuccess = c < d;
console.log(c < d);
// sử dụng để nối chuỗi
var firstname = "Đoàn";
var lastname = "Lợi";
var isStudent = false;
// var fullname= `${firstname} ${lastname} is a student : ${isStudent}`);
console.log(`${firstname} ${lastname} is a student : ${isStudent}`);
// Ứng dụng vào thực tế Toán tử 3 sao
var isLoggedIn = true;
var message = `Trạng thái:${
  isLoggedIn ? "Đã đăng nhập " : " Chưa đăng nhập cần phải đăng nhập "
}`; // ? : dùng để kiểm ta điều kiện;
// Cú pháp: điều_kiện ? giá_trị_nếu_true : giá_trị_nếu_false
console.log(message);
/* Kiểu tra tuổi */
var age = 20;
console.log(`Bạn ${age >= 18 ? "đủ tuổi" : "chưa đủ tuổi "} bầu cử`);
