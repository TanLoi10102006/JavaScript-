/**
    Toán tử 3 ngôi
    Cú pháp : Biến=biểu thức 1 ? biểu thức 2 : biểu thức 3
              Biến=biểu thức 1 ? biểu thức 2 :(biểu thức 1' ? biểu thức 2':biểu thức 3)
 */
let number = 10 
let message=number >=0?"số dương ": "số âm";
console.log(message);

let number2=11;
let message2=number2%2===0?"số chẵn" :"số lẽ";
console.log(message2);
// bài tập nhập điểm trung bình r xuất loại giỏi khá dùng toán tử 3 ngôi //
let dtb=parseFloat(prompt("Mời bạn nhập điểm trung bình "));
let xeploai=dtb>8?"loại giỏi":(dtb>=6.5?"loại khá ":(dtb>=5?"loại trung bình":"loại yếu "))
console.log(xeploai);
