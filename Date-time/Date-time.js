// tạo đối tượng data: Sư dụng new Date () để tạo một đối tượng data mới
let currentDatae = new Date();
console.log(typeof currentDatae); // kiểu dữ liệu object
console.log(currentDatae);
// Các phương thức lấy thông tin thời gian
// lấy năm,tháng, ngày,giờ,phút giây
let currentDate = new Date(); // Tạo đối tượng Date
// dùng get lấy giá trị hiện tại vd 2025

let year = currentDate.getFullYear();
console.log("Năm:", year);

let month = currentDate.getMonth() + 1; // Cộng thêm 1 vì tháng bắt đầu từ 0->11
console.log("Tháng:", month);

let day = currentDate.getDate();
console.log("Ngày:", day);

let hours = currentDate.getHours();
console.log("Giờ:", hours);

let minutes = currentDate.getMinutes();
console.log("Phút:", minutes);

let seconds = currentDate.getSeconds();
console.log("Giây:", seconds);

// Timestamp là gì
/**
Timestamp là một đại điện cho một điểm cụ thể trong thời gian,tính bằng millisecond từ mốc thời gian 0
00:00:00 ngày 11 tháng 1 năm 1978
 */
let timestamp = new Date(0); // có thể thay thế 0 để truyền timestamp để biết móc thời gian hiện tại
console.log(timestamp);

// sử dụng getTime(); để lấy timestamp hiện tại;
let currentTimeStamp = currentDate.getTime();
console.log(currentTimeStamp);
