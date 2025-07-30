// filter: lọc mảng
// cú pháp: arr.filter(function)
/**
function(currentValue,[currentIndex],[array])
Hàm được gọi với những đối số sau:
currentvalue: Giá trị hiện tại đang xử lý trong mảng.
currentIndex: (Tùy chọn) Chỉ số của phần tử đang sử lý.
arr: (Tùy chọn) Mảng đang được duyệt
 */
let M1 = [12, 14, 2, 15, 17, 9, 7];
let evenNumber = M1.filter(
  (currentvalue, currentIndex, arr) => currentvalue % 2 === 0
);
console.log(evenNumber);
