// cắt chuỗi con trong js - slice và substring
// cú pháp: string.slice(beginIndex,endIndex); tính lun khoảng cách cho phép nhập số âm
// beginIndex: Vị trí bắt đầu cắt chuỗi;
// endIndex: Vị trí xác endIndex,không bao gồm endIndex,nếu k nhập sẽ ngầm định là cắt đến cuối chuỗi
let s1 = "1234567890";
let catchuoi = s1.slice(1, 5);
console.log(`Chuỗi sao cắt là ${s1.slice(-6, -3)}`); // cắt từ index 2 đến 9-1=8
console.log(`Chuỗi sao cắt là `, catchuoi);
// vd: chỉ cho phép tin nhắn dài tối đa 20 ký tự
// nếu quá thì tự cắt xuất chuỗi sao xử lý
let s2 = prompt("mời bạn nhập vào chuỗi ");
console.log(`bạn đã nhập ${s2.length} ký tự `);
if (s2.length > 20) {
  console.log(`bạn đã nhập quá ${s2.length - 20} ký tự`);
  let s3 = s2.slice(0, 20);
  console.log(`chuỗi sao sử lý ${s3} `);
  // hoặc có thể viết
  console.log(`chuỗi sao khi xử lý ${s2.slice(0, 20)}`);
}

// cắt chuỗi dùng  substring ()
let s4 = "1234567890";
console.log(`Chuỗi sao cắt là ${s4.substring(1, 9)}`); //kq=23456789
console.log(`Chuỗi sao cắt là ${s4.substring(9, 1)}`); //kq=23456789

// so sánh slice() và substring()
/**
Đối số truyền vào 
substring(start,end): Nhận vào hai tham số là vị trí bắt đầu và kết thúc cho nếu số bắt đầu lớn hơn kết thúc sẽ đảo ngược vị trí khi nhập âm nó sẽ trả về 0
slice(start,end):Nhận vào 2 tham số là vị trí đầu và vị trí kết thúc cho phép số âm 
 */
