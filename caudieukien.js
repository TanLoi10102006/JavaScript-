/**  If else*/
// xuất thông báo cho ng nhập điểm 
let dtb=parseFloat(prompt("Mời bạn nhập điểm "));
if(dtb>=5){
    console.log("bạn đã đỗ");
} else{
    console.log("bạn đã tạch");
}
// xuất thông báo nhập điểm ba môn toán văn anh 
// r tính điểm trung bình nếu điểm trung bình lớn hơn8.0 học sinh giỏi và ngược lại/
let Toan = parseFloat(prompt("Nhập điểm môn Toán:"));
let Van = parseFloat(prompt("Nhập điểm môn Văn:"));
let Anh = parseFloat(prompt("Nhập điểm môn Anh:"));

let cc = parseFloat(((Toan + Van + Anh) / 3).toFixed(2)); ; // Khai báo biến điểm trung bình

if (isNaN(Toan) || isNaN(Van) || isNaN(Anh) || Toan < 0 || Van < 0 || Anh < 0 || Toan > 10 || Van > 10 || Anh > 10) {
  alert("Vui lòng nhập điểm hợp lệ (số từ 0 đến 10) cho tất cả các môn!");
} else {
 
  console.log("Điểm trung bình của bạn là:", cc);

  if (dtb >= 8.0) {
    console.log("Chúc mừng bạn được loại Giỏi!");
  } else if (dtb >= 6.5) {
    console.log("Bạn được loại Khá!");
  } else if (dtb >= 5.0) {
    console.log("Bạn được loại Trung bình!");
  } else {
    console.log("Bạn được loại Yếu!");
  }
}
// if ( true ){
// }
let daDangNhap = true;
if (daDangNhap) {
    console.log("Chào mừng bạn quay lại!");
}