// setTimeout
/**
 setTimeout được sửu dụng để thực hiện một hàm
 sau một khoảng thời gian nhất định.
 Cú pháp:
 setTimeout(function,millseconds,praaml,paraml1,paraml2,...)
 function: Hàm mà chúng ta muốn thực hiện sau một khoản thời gian.
 delay:Thời gian chờ trước khi hàm được gọi,được đo bằng milli giây.
 */

// 1. Ôn lại cách khai báo hàm
// a. Với Arrow function
let helloArrow = () => {
  alert(`Chào mừng bạn đến với khóa học lập trình js `);
};
setTimeout(helloArrow, 5000);

// b. với function declaration
function xinChao() {
  console.log("chào mừng các bạn ");
}
setTimeout(xinChao, 3000);

// c. với function expression
let hello = function () {
  console.log("Chào mừng bạn Đoàn Tấn Lợi");
};
setTimeout(hello, 7000);

// 2. setTimeout : truyền trực tiếp function vào setTimeout
// a. setTimeout : với function declaration
setTimeout(function chao() {
  console.log("helllo function declaration");
}, 5000);
// b. setTimeout : với function expression
setTimeout(function () {
  console.log("hello function expression");
}, 8000);
// c. setTimeout : với dunction Arrow
setTimeout(() => {
  console.log("hello Arrow");
}, 10000);

// 3. setTimeout: Trường hợp hàm có tham số truyền vào
// vd với function Arrow function
let Arrow = (yourName) => {
  console.log(`hello ${yourName}`);
};
setTimeout(Arrow, 3000, "Đoàn Tấn Lợi");
// 4. Khi muốn hủy quá trình thực hiện hàm
// step 1: Gán setTimeout vào biến để lưu giá trị
let timeout = setTimeout(Arrow, 10000, "Leo");
clearTimeout(timeout);
