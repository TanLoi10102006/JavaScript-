// string js part 1: khái quát,index,length
//1.các loại cách xuất chuỗi
console.log("xin chào bạn đến với js");
console.log("xin chào bạn đến vớ js ");
console.log(`xin chào bạn đến với js `);
//2. Khởi tạo chuỗi
let s1 = `Chào mừng bạn đến với 
khóa học lập trình js của thầy Đoàn Tấn Lợi `; // dấu `` k cần dùng \n để xg dõng vì xg dòng thẳng vẫn được
console.log(s1);
console.log(typeof s1);

let s2 =
  "Chào mừng bạn đến\nđến với khóa học lập trình js của thầy Đoàn Tấn Lợi"; // dấu \n dùng để xuống dòng
console.log(s2);
console.log(typeof s2);
// 3.Quy tăc về index trong string ; index bắt đầu từ 0
let ten = "Đoàn Tấn Lợi";
console.log(ten[0]);
//4. Thuộc tính length: Kiểm tra chiều dài chuỗi
let s3 = "Xin chài bạn đã đến với khóa học lập trình của mình";
let s3Length = s3.length;
console.log("độ dài của chuỗi s3:", s3.length);
console.log("độ dài của chuỗi s3:", s3Length);
// vd thực tế
let pasword = "12345678";
let dodai = pasword.length;
if (pasword > dodai) {
  console.log("mật khẩu bạn đã hợp lệ ");
} else {
  console.log("mật khẩu quá ngắn ");
}
// Nhập vào 1 đoạn tin nhắn, giới hạn ký tự nhập tối đa 200;
// nếu vượt quá báo số ký tự đã vượt quá
let message = prompt("Mời bạn nhập chuỗi vào");
if (message.length <= 200) {
  alert(`bạn đã nhập ${message.length} ký tự`);
} else {
  alert(`Bạn đã nhập quá ${message.length - 200} ký tự `);
}
