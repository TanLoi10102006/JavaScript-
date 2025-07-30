// dựa trên một hàm xử lý -> tính toán và trả về giá trị duy nhất sau khi tính toán
/**
Syntax: reduce(function,[initivalValue])
1. function: Một hàm để thực thi cho từng phần tử trong mảng
2. initiaValue: Giá trị khởi tạo
 */
// Bài toán không dùng reduce()
let M1 = [1, 2, 3];
// Thực hiện tính tổng các phần tử trong mảng
//1. giá trị khởi tạo ban đầu
let sum = 0;
for (let number of M1) {
  sum += number;
}
console.log("Tổng các phần tử trong mảng :", sum);

// Khi dùng reduce()
// cú pháp: reduce(function(tichLuy, giaTriHienTai, chiSo, mangGoc))
/**
accmulator: Giá trị tích lũy, được cập nhật sau mỗi lần gọi hàm
currentValue: Giá trị hiện tại đang xử lý trong mảng.
currentIndex: (Tùy chọn) chỉ số của phần tử đang xử lý 
arry:(Tùy chọn) Mảng đang được reduce.
 */
/**
1. Tham số thứ 2: intiaValue giá trị khởi tạo của accmulator ban đầu,
2. Nếu bỏ trống initiavalue:
   a. accmulator: tích lũy sẽ lấy giá trị đầu tiên trong mảng làm giá trị khởi tạo,
   và bắt đầu thực hiện từ phần tử thứ 2
   b. Nếu mảng trống mà 0 có giá trị intialValue--> reduce()
 */
let M2 = [3, 4, 5, 6];
let sum2 = M2.reduce((accmulator, currentValue, currentIndex, arry) => {
  return accmulator + currentValue;
}, 0);
console.log(sum2); // kq:18
// vd 2:
let M3 = [7, 9, 1, 10];
let sum3 = M3.reduce(function (a, b) {
  return a + b;
}, 0);
console.log(sum3); // kq:27
