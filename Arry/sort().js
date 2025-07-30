//7. sort(): dùng để xắp xếp mảng;
// Cú pháp: array.sort(compareFunction);
/**
 * array: Mảng cần được sắp xếp thứ tự tăng dần 
 * compareFunction(Tùy chọn): Hàm so sánh sử dụng để xác định thứ tự sắp xếp.
Nếu không được cung cấp,sort() sẽ xắp xếp các phần tử dưới dạng chuỗi Unicode
 */

// Khi không có truyền (compareFunction);
let M5 = ["c", "a", "b"];
// Để xem giá trị unicode dùng charCodeAt()
console.log("b".charCodeAt());
// duyệt mảng để xem từng phần tử
for (let element of M5) {
  console.log(element);
  console.log(`${element} có mã unicode là: ${element.charCodeAt()}`);
}
// dùng sort để xắp xếp
console.log(`mảng được sắp xếp lại là:${M5.sort()}`);

// Trường hợp 2: phần tử có nhiều ký tự đầu: So sánh các ký tự đầu để xếp
// Nếu ký tự giống nhau, so tiếp đến ký tự phía sau, mã unicode thấp hơn xếp trước
let M6 = ["baca", "a", "c"];
console.log("xắp xếp kí tự tăng dần là", M6.sort());

// vd: với các kí tự số (Vì xếp theo unicode nên kq không như mong muốn)
let M7 = [9000, 200, 5000];
console.log("kết quả xắp xết là", M7.sort()); //kq:[200,5000,9000]=> kết quả k như mong muốn
console.log("9000".charCodeAt()); //kq:57;
console.log("200".charCodeAt()); //kq:50
console.log("5000".charCodeAt()); //kq:53

// Hàm so sánh (compare function)
/**
1.Nếu compare Functon được cung cấp, nó sẽ nhận hai đối số, thường được gọi a và b
2.nếu compareFunction(a,b) trả về một giá trị<0,a sẽ được đặt trước b.
3.Nếu compareFunction(a,b) trả về 0,thứu tự giữa a và b không thay đổi 
4.Nếu compareFunction(a,b) trả về một giá trị>0,b sẽ được đặt trước a
 */
let M8 = [19, 16, 9, 10];
// trước khi sắp xếp
console.log(M8); // kq:[19,16,9,10]
// sao khi sắp xếp thứ tự tăng dần
let M9 = M8.sort(function (a, b) {
  return a - b;
});
console.log(M9); //kq:[9,10,16,19];
// dùng arrow function
let M10 = M8.sort((a, b) => b - a); // Giảm dần
console.log(M10);
console.log(M8); // Thay đổi lun mảng  gốc
