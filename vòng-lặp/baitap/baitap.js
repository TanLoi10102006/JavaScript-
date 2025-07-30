/** Bài tập lập trình 
 * Bài 1: Tính chu vi, diện tích hình tròn 
          Viết chương trình nhập vào  từ bàn phím bán kính r của đường tròn,in ra kết quả
          a.Chu vi = ?
          b. Diện tích = ?
 */
let numberA=parseFloat(prompt("mời bạn nhập bán kính "));
let PI = Math.PI;
console.log(`chu vi hình tron = ${numberA*2*PI}`);
console.log(`diện tich hinh tron = ${PI*numberA*numberA}`);
/**
 * Bài tập 2: Tính chu vi, diện tích hình chữ nhật
           a. Viết chương trình nhập vào 2 số thực dương a,b từ bàn phím 
           b. In ra màn hình chu vi và diện tích của hình chữ nhật đó 

 */
let numberB = parseFloat(prompt("Mời bạn nhập chiều dài"));
let numberC = parseFloat(prompt("Mời bạn nhập vào chiều rộng "));
console.log(`diện tích = ${numberB*numberC}`);
console.log(`chu vi = ${(numberB+numberC)*2}`);
/**
 * Bài tập 3: Viết chương trình nhập vào điểm ba môn toán,văn,anh của 1 học sinh,tính điểm trung bình
và xuất kết quả làm tròn 2 chữ số sau dấu 
    Gợi ý : dùng number.toFixed(nhập số bạn mún làm tròn sau dấu phẩy)
 */
let Toan=parseFloat(prompt("Nhập điểm môn Toán "));
let Van=parseFloat(prompt("Nhập điểm môn Văn "));
let Anh=parseFloat(prompt("Nhập điểm môn Anh "));
console.log(`dtb là: ${((Toan + Van + Anh) / 3).toFixed(2)}`);
