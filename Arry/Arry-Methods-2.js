//1. indexOf(searchValue,fromIndex): Trả về vị trí index  của phần tử xuất hiện đầu tiên trong mảng
// Trả về -1 nếu không tìm thấy
let arr1 = [1, 2, "nam", 4, 5, "nam"];
console.log(arr1.indexOf("nam")); // kq:2
console.log(arr1.indexOf("nam", 3)); //kq:5
console.log(arr1.indexOf(8)); //kq:-1

//2. lastIndexOf(saerchValue,endIndex): Trả về vị trí index của phần tử xuất hiện lần cuối cùng trong mảng nếu tìm thấy
// Trả về -1 nếu k tìm thấy
let arr2 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
console.log(arr2.lastIndexOf(1, 7)); // kq:6
console.log(arr2.lastIndexOf(8)); // kq:-1

//3. reverse(): Đảo ngược thứ tự của các phần tử trong mảng gốc.
// Nó thay đổi mảng gốc và không tạo ra mnagr mới
let arr3 = [1, 3, 4, 5, 6];
arr3.reverse();
console.log(arr3);
// Lưu ý: reverse làm thay đổi mảng gốc,
// Nếu muốn giữ nguyên bản gốc,hãy reverse trên bảng sao
let arr4 = [1, 2, 3, 4, 5];
let arr5 = arr4.slice().reverse();
console.log(arr5);
console.log(arr4);

//4. join(separator): Nối các phần tử trong mảng thành chuỗi,theo ký tự phân tách'separator'
// sparatorr: Nếu bỏ trống sẽ mặc định là dấu ,
// phưng thức này k thay đổi mảng gốc
// cú pháp: arr.join(sparatorr);
let arr6 = [1, 2, 3, 4, "Lợi"];
console.log(arr6.join()); //kq:1, 2, 3, 4, "Lợi"
console.log(typeof arr6); //kq:object
console.log(arr6.join("+")); // kq: 1+2+3+4+Lợi

//5.splice(start,deleteCount,item1,item2,....): dùng để thêm hoặc xóa phần tử trong mảng
// cú pháp array.splice(start,deleteCount,item1,item2,...);
/**
 * start: chỉ định vị trí bắt đầu thay đổi mảng.Nếu là số âm, nó sẽ được tính từ cuối mảng
 * deleteCount: Số nguyên chỉ định số lượng phần tử sẽ bị loại bỏ từ mảng,bắt đầu từ vị trí
start.(Nếu deleteCount là 0,không có phần tử nào bị loại bỏ);
 * item1,item2,...: Các phần tử mới sẽ sẽ được thêm vào mảng từ vị trí start
*/
// Xóa phần tử trong mảng
let arr7 = [1, 2, 3, "lợi", 5, 6];
console.log(arr7.splice(2, 3)); // xuất ra các phần tử bị xóa là: kq: 3,'Lợi',5
console.log(arr7); // Làm thay đổi chuỗi gốc kq:1,2,6
let arr8 = [1, 2, 3, 7, 8, 9];
console.log(arr8.splice(-2, 2)); // Xóa từ vị trí -2 xóa đi 2 phần tử là kq:8,9
console.log(arr8); // kq:1,2,3,7
// thêm phần tử vào mảng:
let arr9 = [1, 2, 3, 4, 5];
arr9.splice(2, 1, 10);
console.log(arr9); // kq:[1, 2, 10, 4, 5]
let arr10 = [11, 12, 13, 14, 15];
arr10.splice(2, 0, 7);
console.log(arr10); // kq:11,12,7,13,14,15
let arr11 = [1, 2, 3, "Lợi"];
arr11.splice(1, 0, "Đoàn", 10, 19);
console.log(arr11);

//6.Toán tử spread(...)
// Tạo bản sao (clone) của mảng:
// Tạo ra mảng mới nằm trên ô nhớ mới,có phần tử giống hệt mảng gốc
let M1 = [1, 2, 3, 4];
let M2 = [...M1];
// cách 2 clone mảng
// let M2=M1.slice();
console.log(...M2);
// Mảng M2 là clone của M1
// và thay đổi giá trị của M2 không liên quan đến M1
M2[0] = 1000;
console.log("Mảng M2=" + "" + M2);
console.log("Mảng M1=" + M1);

//a) Truyền đối số mảng vào hàm
function sum(a, b, c) {
  return a + b + c;
}
let number = [1, 2, 3];
let result = sum(...number);
console.log(result); // kq=6

//b) kết hợp mảng
let arr12 = [1, 2, 3];
let arr13 = [4, 5, 6];
let combineArr = [...arr12, ...arr13];
console.log(combineArr); // kq [1, 2, 3, 4, 5, 6]

//c) Tạo mảng mới với thêm phần tử:
let M3 = [1, 2, 3];
let M4 = [...M3, 4]; // Không làm thay đổi mảng gốc
console.log(M4); // kq: [1, 2, 3, 4]
// console.log([...M3, 4]);

//d) Chuyển đổi iterable thành mảng
let Myname = "Peter";
console.log([...Myname]);
