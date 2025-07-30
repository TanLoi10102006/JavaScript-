// Nhập vào 1 chuỗi từ bàn phím
/**
1. đếm xem có bao nhiêu ký tự thường 
2. bao nhiêu in hoa
3. bao nhiêu số
4. bao nhiêu space
 */
let input = prompt("Mời bạn nhập chuỗi vào");

// Khởi tạo biến
let toUpperCase = 0;
let toLowerCase = 0;
let number = 0;
let spaceCount = 0;
// Duyệt từng kí tự trong chuỗi ;
for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
  let char = input[i];
  if (char >= "a" && char <= "z") {
    toLowerCase++;
  } else if (char >= "A" && char <= "Z") {
    toUpperCase++;
  } else if (char >= "0" && char <= "9") {
    number++;
  } else if (char === " ") {
    spaceCount++;
  }
}
console.log(`kí tự bạn đã nhập là ${input}`);
console.log(`số kí tự viết thường =${toLowerCase}`);
console.log(`số kí tự viết hoa = ${toUpperCase}`);
console.log(`tất cả số =${number}`);
console.log(`số khonagr trắng= ${spaceCount}`);

// Viết chương trình kiểm tra tính hợp lệ của mật khẩu
/**
 * Mật khẩu hợp lệ khi có ít nhất 6 ký tự 
 * chứa ít nhất 1 chữ cái viết hoa 
 * chứa ít nhất 1 chữ cái thường 
 * chứa ít nhất 1 chữ số
2. cho người dùng nhập vào mật khẩu login so sánh 
nếu đúng mở cửa,sai quá 5 lần khóa đăng nhập,thoát chương trình 
 */
function isPasswordValid(password) {
  if (password.length < 6) {
    return false;
  }

  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasDigit = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char >= "a" && char <= "z") {
      hasLowerCase = true;
    } else if (char >= "A" && char <= "Z") {
      hasUpperCase = true;
    } else if (char >= "0" && char <= "9") {
      hasDigit = true;
    }
  }

  return hasLowerCase && hasUpperCase && hasDigit;
}

// 📦 Hàm thiết lập mật khẩu
function setPassword() {
  let password = prompt("🔐 Mời người dùng thiết lập mật khẩu:");

  if (isPasswordValid(password)) {
    alert("✅ Đặt mật khẩu thành công! Mật khẩu là: " + password);
    return password;
  } else {
    alert(`❌ Mật khẩu không hợp lệ. Yêu cầu:
    1. Có ít nhất 6 ký tự
    2. Có ít nhất 1 chữ số
    3. Có ít nhất 1 chữ cái viết hoa
    4. Có ít nhất 1 chữ cái viết thường`);

    // 🔁 Trả về kết quả từ lần gọi tiếp theo
    return setPassword();
  }
}

// 🧠 Gọi hàm và lưu kết quả
let passwordOK = setPassword();
// Viết chương trình đăng nhập mật khẩu
let countLogin = 0;
while (true) {
  let passwordLogin = prompt("Mời bạn nhập lại mật khẩu ");
  if (passwordLogin === passwordOK) {
    alert("Bạn đã nhập đúng mật khẩu ");
    break;
  } else {
    countLogin++;
    if (countLogin < 5) {
      alert("bạn đã nhập mật khấu sai,số lần thử " + countLogin + "/5");
    } else {
      alert("bạn đã thử quá 5 lần,tài khoản bạn bị khóa,liên hệ admin");
      break;
    }
  }
}
