/**Viết chương trình chuyển tin nhắn sang mật mã theo bảng :  
 const a="abcdefghijklmnopqrstuvwxyz"   
 const b="zxcvbnmasdfghjklqwertyuiop"  */
// Các bài liên quan đến chuỗi đều dùng for để duyệt chuỗi

function encyptMessage(message) {
  const a = "abcdefghijklmnopqrstuvwxyz";
  const b = "zxcvbnmasdfghjklqwertyuiop";
  let result = "";
  for (let i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase(); // Chuyển đổi sang chữ thường cho phù hợp với bản mã;

    // kiểm tra xem ký tự nhập vào có trong bảng mã hay không
    if (a.includes(char)) {
      // Thực hiện chuyển đổi
      // kiểm tra vị trí index của a
      let index = a.indexOf(char);
      // lấy giá trị index a sang b  để lấy kí tự tương ứng
      result += b[index];
    }
    // nếu không có
    else {
      result += char; // result=result+char
    }
  }
  return result;
}
// cho người dùng nhập liệu
let messageinput = prompt("mời người dùng nhập liệu");
let kq = encyptMessage(messageinput);
alert(`tin nhắn được mã hóa :${kq}`);

// Đến từ tôi gtrong string
let a = "tôi chăm học tôi chịu khó tôi đẹp trai";
let targetWord = "tôi";
let count = 0;
for (let i = 0; i < a.length; i++) {
  if (a.slice(i, i + targetWord.length) === targetWord) {
    count++;
  }
}
alert(`số lần xuất hiện của từ ${targetWord} trong chuỗi là: ${count}`);

// cho người dùng nhập chuỗi vào r tách số chuỗi riêng

function numberString(inputString) {
  let string = "";
  let number = "";
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    if (isNaN(char)) {
      string += char;
    } else {
      number += char;
    }
  }
  return { string, number };
}

let input = prompt("Mời bạn nhập chuỗi");

alert(`Chuỗi chữ là: ${numberString(input).string}
Chuỗi số là: ${numberString(input).number}`);
