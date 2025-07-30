//setInterval
// Cú pháp giống setTimeout
// Cú pháp setInterval(function,millseconds,praaml,paraml1,paraml2,...)

// vd1: Function declaration
function xinchao() {
  console.log("Bạn có xxx tin nhắn chưa đọc");
}
setInterval(xinchao, 3000);

// vd2: Hiển thị thời gian mỗi giây
function updateTime() {
  let currentTime = new Date();
  console.log(currentTime.toLocaleTimeString()); // Hiển thị giờ phút giây
}
setInterval(updateTime, 1000);

// Đếm số lần gọi hàm mỗi 5 giây
let counter1 = 0;
function countDeclaration() {
  console.log("Declaration:", counter1++);
}
setInterval(countDeclaration, 5000);

// Function expression
let counter2 = 0;
const countExpression = function () {
  console.log("Expression:", counter2++);
};
setInterval(countExpression, 5000);

// Arrow function
let counter3 = 0;
const countArrow = () => {
  console.log("Arrow:", counter3++);
};
setInterval(countArrow, 5000);

// Hủy lặp sau 5 lần
let counter4 = 0;
const countLimited = () => {
  console.log("Limited:", counter4++);
  if (counter4 === 5) {
    clearInterval(stopInterval);
    console.log("Đã dừng sau 5 lần.");
  }
};
let stopInterval = setInterval(countLimited, 1000);
