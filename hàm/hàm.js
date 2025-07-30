// function (hàm trong js)
// bước 1 khai báo
function tenFunction() {
  // mã lệnh thực hiện một nhiệm vụ nào đó
}
// bước 2 : Gọi hàm-khi cần sử dụng
tenFunction();
// vd đơn giản
function xinChao() {
  console.log("chào mừng bạn đến hàm của js ");
}
xinChao();
// function với tham số (parameters);
let inputName = prompt("Mời bạn nhập vào tên của bạn  ");
function xinChao2(name) {
  console.log(`Chào mừng ${name}  đến với tự học`);
}
//Gọi hàm
xinChao2(inputName);
xinChao2("Đoàn Tấn Lợi");
// vd về hàm tính tổng
function tinhTong(a, b) {
  // let kq = a+b;
  // return kq ;
  // cách viết ngắn gọn hơn
  return a + b;
}
// gọi hàm
console.log(tinhTong(8, 7));
// gán biến cho hàm ( lưu giá trị trả về vào cho biến )
let diemToan = 8;
let diemVan = 9;
let tongdiem = tinhTong(diemToan, diemVan);
console.log(`tổng điểm = ${tongdiem}`);
console.log(`Đtb = ${tongdiem / 2}`);
// lưu ý : Thân hàm nếu không có return thì giá trị trả về là undefined
// hàm k ruturn dùng để thực hiện như
// + hiện thông báo, giửi dữ liệu,và thay đổi giao diện
function tinhTong2(a = 9, b = 7) {
  return a + b;
}
console.log(tinhTong2(10));
// Arguments ?
// - Đối tượng arguments
// - Giới thiệu vòng for
function writeLog() {
  console.log(arguments);
}
writeLog(1, 2, 3, 4, 5, 6, 7, 8); // kết quả trả về [object Arguments] {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   4: 5,
//   5: 6,
//   6: 7,
//   7: 8
// }
function greetAll() {
  for (var name of arguments) {
    console.log("Xin chào", name);
  }
}

greetAll("Lợi", "Minh", "Trang");
// in ra các phần tử nằm trên 1 dòng
function greetAll2() {
  var myString = "";
  for (var param of arguments) {
    myString += param;
  }
  console.log(myString);
}
greetAll2(`số 1,số 2,số 3`);
