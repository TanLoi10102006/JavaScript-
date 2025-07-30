// học về while 
/**while (điều_kiện) {
  // khối lệnh được thực thi nếu điều_kiện là true
} */
let i = 1;
while(i<=5){
    console.log(i);
    i++;// i=i+1;
}
// vd thực hành : viết chương trình nhập vào số n từ bàn phím
// n phải là số nguyên nằm trong khoảng từ 1 đến 99
// nhập sai bắt nhập lại
let n = parseInt(prompt("Mời bạn nhập số từ 1 đến 99"));
while (isNaN(n) || n < 1 || n > 99 || n % 1 !== 0) {
    n = parseInt(prompt("Bạn nhập không hợp lệ, vui lòng nhập lại từ 1 đến 99")); // cần gán lại giá trị vào n
}
alert("Bạn đã nhập số n = " + n);
/** do-while
   cú pháp: do {
  // khối lệnh được thực thi
} while (điều_kiện);
 lưu ý : dù sai vòng lập vẫn chạy 1 lần duy nhất 
 */
let e=1;
do{
    console.log(e);
    e++;
} while(e<=5);
// while true 
/**while (true) {
  // khối lệnh sẽ chạy mãi mãi
  if (điều_kiện_dừng) {
    break; // thoát khỏi vòng lặp
  }
} */
// tăng n lên cho đến khi  n=10;
let h= 0;
while(true){
    h++;
    alert(n);
    if(n===10){ // muốn chương trình dừng lại dùng break;
        break;

    }  
}
// vd thực tế
let g;

while (true) {
  g = parseInt(prompt("Nhập một số nguyên từ 1 đến 10:"));

  if (!isNaN(g) && g >= 1 && g <= 10 && g % 1 === 0) {
    alert("Bạn đã nhập đúng: " + g);
    break; // kết thúc vòng lặp
  } else {
    alert("Dữ liệu không hợp lệ, vui lòng nhập lại!");
  }
}
///////
while (true) {
  let pass = prompt("Nhập mật khẩu:");

  if (pass === "123456") {
    alert("Đăng nhập thành công!");
    break; // đúng mật khẩu thì thoát vòng lặp
  } else {
    alert("Sai mật khẩu, thử lại!");
  }
}