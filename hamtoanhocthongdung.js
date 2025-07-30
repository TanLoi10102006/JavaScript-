/**
 * Hàm	                           Mô tả	                    Ví dụ
Math.abs(x)	                  Giá trị tuyệt đối	                Math.abs(-5) → 5
Math.sqrt(x)                  Căn bậc hai	                    Math.sqrt(9) → 3
Math.pow(x, y)	              Lũy thừa	                        Math.pow(2, 3) → 8
Math.max(a, b, ...)        	  Tìm giá trị lớn nhất	            Math.max(1, 5, 3) → 5
Math.min(a, b, ...)	          Tìm giá trị nhỏ nhất	            Math.min(1, 5, 3) → 1
Math.log(x)	                  Logarit tự nhiên (ln)	            Math.log(Math.E) → 1
Math.log10(x)	              Logarit cơ số 10	                Math.log10(100) → 2
Math.exp(x)	                  e^x	                            Math.exp(1) → 2.718...
 */
// Hàm Math.abs(x)
let numbera = parseFloat(prompt("mời bạn nhập số a"));
console.log(`kq = ${Math.abs(numbera).toFixed(2)}`);
// Hàm Math.sqrt(x)
let numberb = parseFloat(prompt("mời bạn nhập số b"));
console.log(`kq căn bậc 2 = ${Math.sqrt(numberb).toFixed(2)}`);
// Hàm Math.pow(x,y)
let numberc = parseFloat(prompt("mời bạn nhập số c "));
let numberd = parseFloat(prompt("mời bạn nhập số d "));
console.log(`kq lũy thừa ${Math.pow(numberc, numberd).toFixed(2)}`);
// Hàm Math.max(a,b,.....);
let dayso = [10, 9, 19, 25, 50];
console.log(`dãy số lớn nhất = ${Math.max(...dayso)}`); // dấu ... có ý nghĩa bung mảng thành từng phần tử riêng lẻ
// Hàm Math.min(a,b,...);
let daysonho = [3, 8, 9, 10];
let min = Math.min(...daysonho);
console.log("dãy số nhỏ =", min);
/** Làm tròn và xử lý số
Hàm	Công dụng	                   Mô tả                        Ví dụ
Math.round(x)                 Làm tròn gần nhất                 Math.round(4.5) → 5
Math.floor(x)	              Làm tròn xuống	                Math.floor(4.9) → 4
Math.ceil(x)	              Làm tròn lên	                    Math.ceil(4.1) → 5
Math.trunc(x)	              Cắt bỏ phần thập phân	            Math.trunc(4.7) → 4
 */
// Hàm Math.round(x): làm tròn với số nguyên gần nhất
let numbere = parseFloat(prompt("mời bạn nhập số bạn cần làm tròn"));
console.log(`kq làm tròn với hàm round = ${Math.round(numbere)}`);
// Hàm Math.floor(x): làm tròn xuống với số nguyên nhỏ hơn ;
let numberf = parseFloat(prompt("mời bạn nhập số cần làm tròn "));
let solamtron = Math.floor(numberf);
console.log("kq làm tròn với hàm floor =", solamtron);
// Hàm Math.ceil(x): làm tròn lên số nguyên gần nhất
let numberg = parseFloat(prompt("mời bạn nhập số cần làm tròn lên"));
console.log(`kq làm tròn với hàm ceil = ${Math.ceil(numberg)}`);
// Hàm Math.trunc(x)
let numberh = parseFloat(prompt("mời bạn nhập số h "));
let catbophanthapphan = Math.trunc(numberh);
alert("kq khi sử dụng hàm trunc" + catbophanthapphan); // k  sử dụng dấu , được vì alert Vấn đề nằm ở alert chỉ nhận 1 thứ để hiển thị, còn bạn đang truyền vào 2 thứ: một chuỗi và một biến
/**Hàm	                        Mô tả	                                    Ví dụ
Math.sin(x)                  	sin(x)                 x tính theo radian	Math.sin(Math.PI / 2) → 1
Math.cos(x)                 	cos(x)	                                    Math.cos(0) → 1
Math.tan(x)	                    tan(x)	                                    Math.tan(Math.PI / 4) → 1
Math.asin(x)	                arcsin	                                    Math.asin(1) → 1.5708 (π/2)
Math.acos(x)	                arccos	                                    Math.acos(1) → 0
Math.atan(x)	                arctan	                                    Math.atan(1) → 0.7853 (π/4)
*/
// Hàm `Math.random()`
let random = Math.random();
console.log("số ngẫu nhiên bằng=", random);
// số lớn hơn 1
let randoma = Math.random() * 10;
console.log(randoma);
// số nguyên lớn hơn 1
let randomb = Math.floor(Math.random() * 10); // cách 1
console.log(randomb);
//cách2
let randomc = parseInt(Math.random() * 10);
console.log(randomc);
// random tăng 2
let randomd = parseInt(Math.random() * 11) * 2;
console.log(`giá trị ${randomd}`);
console.log(`giá trị nhỏ ${Math.min(randomd)}`); // dùng để random nhìu số để tìm min max
console.log(`giá trị lớn nhất ${Math.max(randomd)}`);
