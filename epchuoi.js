/**
 * Ép kiểu dữ liệu  
 */
let numberA = prompt("Mời các bạn nhập vào Number A:");
console.log(typeof numberA); // string 
// Thử tính toán khi chưa ép kiểu dữ liệu
let numberB= 7;
console.log(typeof numberB);// number 
// Lấy A cộng với B 
console.log(numberA+numberB);
let kq=numberA+numberB
console.log(`kết quả khi a + B ${kq} `); // vd numberA=9 --> kq=97 sai, js hiểu là chuỗi cộng chuỗi 
console.log(typeof kq); // string 
// Các loại phép toán khác 
console.log(`A-B=`,numberA-numberB);
console.log(`A*B=`,numberA*numberB);
console.log(`A/B=`,numberA/numberB);
console.log(`A-B=`,numberA%numberB);
// ép kiểu sang số nguyên 
let numberC = parseInt(prompt("mời các bạn nhập số vào "));
console.log("kiểu dữ liệu của numberC:",typeof numberC)
console.log(`kq la ${numberC + numberB}`);
// ép kiểu sang số thực Float
let numberD = parseFloat(prompt("Mời các bạn nhập numberD"));
console.log('kiểu dữ liệu của numberD:',typeof numberD);
console.log("kq là:",numberD+numberB);
// ép kiểu đơn giản dùng hàm Number() để ép từ chuỗi --> sang kiểu dữ liệu number;
let numberE = Number(prompt("Mời các bạn nhập numberE"));
console.log("kiểu dữ liệu numberE",typeof numberE);
kq=numberB+numberE;
console.log(`kq ${kq}`);

