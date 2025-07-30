// Mảng trong js
let name1 = "LỢi";
let name2 = "Hoa";
let name3 = "Lan";
// Khai báo mảng
// Sử dụng cặp dấu ngoặc []
let arr1 = [];
console.log(arr1);
let arr2 = [1, 2, 3];
console.log(arr2);
let arr3 = [1, 2, 3, "nam", true, [2, 3, 4, 5]];
console.log(arr3);
// sử dụng Arry và Constructor:
let arr4 = new Array();
console.log(arr4);
// Khai báo mảng chứa nhiều loại giá trị sử dụng Arry Constructor
let arr5 = new Array(1, 2, "one", true);
console.log(arr5);
// Tạo mảng với độ dài xác định các tử là underfined
let arrayWithLength = new Array(5);
console.log(arrayWithLength);
console.log(arrayWithLength[0]); // kq=underfined
// Truy xuất các phần tử trong mảng qua vị trí index
let arr6 = [10, 50, 90, "Đoàn Tấn Lợi"];
console.log(arr6[1]);
console.log(arr6[3]);
// Gán,thay đổi giá trị cho mảng index
let arr7 = [7, 9, 10, 11];
console.log("arr7 trước khi thay đổi ");
console.log(arr7);
arr7[2] = "Chào mừng bạn đến với js"; // Thay đổi lun mảng gốc
console.log("sao khi thay đổi ");
console.log(arr7[2]);
console.log(arr7);
// Duyệt mảng
let arr8 = [19, 7, 8, 9, 10];

for (let i = 0; i < arr8.length; i++) {
  console.log(i);
  console.log(arr8[i]);
  arr8[i] += 1;
}
console.log(arr8);
// for...of chỉ xem khong sửa được giá trị của mảng
let arr9 = [1, 8, 6, 7];
let count = 0;
for (let Arry of arr9) {
  // Kiểm tra điều kiện
  if (Arry % 2 === 0) {
    console.log(Arry);
    count++;
  }
  console.log(Arry);
}
console.log("số lượng số chẵn có trong mảng là " + count);
