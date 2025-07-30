/** Toán tử trong số học 
 +  --> cộng
 -  --> trừ
 *  --> nhân
 ** --> lũy thừa 
 /  --> chia 
 %  --> chia lấy số dư 
 ++ --> tăng 1 giá trị số
 -- --> giảm 1 giá trị số

 */
var a =5; 
var b =7;
var c = a+b;
// hoặc có thể var c= 5+7
console.log(c); // hoặc có thể console.log(a+b);

// phép toán trừ nhân chia, chia lấy dư lũy thừa cũng giống như vậy
// Tăng 1 giá trị 
var d = 9;
d++;
console.log(d);
// giảm 1 giá trị số 
var e= 7
e--;
e--;
console.log(e);
/** học kĩ hơn 
 //Toán tử ++ --
 // prefix & postfix
      prefix: tiền tố;
      postfix: hậu tố; 
 */
var i = 10; 
// Việc 1: +1 cho i, a=a+1 => a=11
// Việc 2: Trả về i sau khi được +1
console.log(++i);
//Việc 1: -1 cho i, i=i+1 => i=9
//Việc 2: Trả về i sau khi được -1
console.log(--i);


var f = 11;
// Việc 1: 'f copy ',' f copy '=11
// Việc 2: +1 cho f, f=f+1 => f=12
// Việc 3: trả về 'f coppy'
//phép trừ cũng tương tự 
var output = f++;// phép cộng hậu tố 
console.log('output: ', output);
console.log("f:",f);
// phép cộng tiền tố
var g = 15 
var output = --g
console.log('output:', output);
console.log("g:",g);
/**
 Bài tập toán tử phép cộng hậu tố và phép cộng tiền tố 
 */
//bài 1
var number=9
var output = number++ + --number;
console.log('output: ',output );
//bài2 
var number2= 20
var output = ++number2 *2 + number2--*2;
console.log('output: ',output);
  




 
