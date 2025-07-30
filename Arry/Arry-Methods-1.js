//1.concat(): Nối mảng hiện tai với mảng khác và trả về một mảng mới
// Cú pháp: arr1.conact(arr2,arr3,...,arrN);
let arr1 = [1, 2, 3, 4];
let arr2 = [4, 5, 6];
let newArr = arr1.concat(arr2);
console.log(newArr); //kq : [1,2,3,4,5,6]
//2.push(): Thêm một hoặc nhiều phần tử vào cuối mảng gốc.
// cú pháp: arr.push(thêm nội dung bạn muốn )
let arr3 = [7, 9, 8];
arr3.push(5, 98, [4, 5, 7]);
console.log(arr3); // nó thay đổi mảng gốc lun
//3.unshift(): thêm một hoặc nhiều phần tử vào đầu mảng gốc
// cú pháp: arr.unshift(thêm nội dụng bạn muốn thêm)
let a = "Táo";
let b = "Đu đủ";
let c = "Xoài";
let arr4 = [a, b, c];
arr4.unshift(1, 2, 3);
console.log(arr4); // [1, 2, 3, "Táo", "Đu đủ", "Xoài"]
//4.pop(): Loai bỏ phần tử cuối cùng của mảng(làm thay đổi mảng gốc) và trả về phần tử đã loại bỏ
// cú pháp: arr.pop()
let arr5 = [1, 2, 3, "nam"];
console.log(arr5.pop()); // kq: nam
console.log(arr5); // làm thay đổi mảng gốc lun kq:1,2,3
//5.shift: loại bỏ phần tử đầu tiên của mảng và trả về phần tử đã bị loại bỏ.
let arr6 = [1, 2, 6, 8];
console.log(arr6.shift()); //kq:1
console.log(arr6); // kq:2,6,8
/**6.silce(sratIndex,endIndex): tạo một bản sau của mảng-> lưu sang 1 vùng nhớ mới
   Cắt chuỗi gốc,lấy từ startIndex đến sát endIndex chuỗi gốc (không bao endIndex).
   Bỏ trống sẽ hiểu sao chép lấy toàn bộ mảng gốc sang mảng mới 
 */
let arr7 = [1, 2, 4, 5, 7, 9];
console.log(arr7.slice(1, 4)); // nếu k nhập j thì nó sẽ lấy hết : kq: 2,4,5
//7. includes(): Kiểm tra xem một mảng có chứa một giá trị cụ thể hay không.
// trả về true nếu có flase nếu k có
// cú pháp : array.includes(valueToFind, startIndex)
let arr8 = [1, 2, 3, "nam", 5, 7];
console.log(arr8.includes("nam")); //kq:true
console.log(arr8.includes(1, 2)); // flase
