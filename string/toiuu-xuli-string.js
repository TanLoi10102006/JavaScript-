// trim - trimEnd-trimStart : Loại bỏ khoản trắng
/** 
loại bỏ khoảng trắng ở cả hai đầu chuỗi trả về một chuỗi mới sau khi thực hiện 
 */
let s1 = "   Hello   ";
console.log(`chiều dài ký tự ${s1.length}`);
console.log(`xóa khoảng trắng các ký tự ${s1.trim()}`);
let s2 = s1.length - s1.trim().length; // lấy chiều dài của chuỗi ban đầu trừ đi chiều dài của chuỗi mới
console.log(`số kỹ tự bị xóa là ${s2}`);
// trimEnd()
console.log(`xóa khoảng trắng các ký tự ở cuối ${s1.trimEnd()}`);
// trimStart()
console.log(`xóa khoảng trắng kí tự đầu ${s1.trimStart()}`);

// concat(),toUpperCase(),toLowerCase(),charAt()
// concat(): nối chuỗi
// let newString=string1.concat(string2,string3,...,stringN);
let s3 = "Đoàn";
let s4 = "Tấn";
let s5 = "Lợi";
console.log(`Họ tên là:${s3.concat(" ", s4, " ", s5)} `);

// toUpperCase(): chuyển toàn bộ sang viết hoa;
let s6 = "Chào Mừng bạn đến Với khóa Học Lập Trình JS";
console.log(`các ký tự viết hoa là:${s6.toUpperCase()}`);

// toLowerCase(): chuyển toàn bọ chuỗi sang viết thường
console.log(`các kí tự viết thường là:${s6.toLowerCase()}`);

// charAt(index)
//-> Trả về chuỗi nằm ở vị trí index được truyền vào
// cú pháp string.charAt(index);
console.log(`${s3.charAt(3)}`); // kq:n

// replace: thay thế chuỗi
// cú pháp : string.replace(oldValue,newValue);
let s7 = "học học nữa học mãi";
console.log(s7.replace("học", "ngủ"));

// Để thay thế tất cả dùng biểu thức chính quy (regular expression)
// dấu / bắt đầu biểu diễn chính quy :
// dấu / kết thúc phần chuỗi cần tìm kiếm.
// g: Cờ global.Khi sử dụng cờ này -> js sẽ tìm kiếm toàn bộ chuỗi
// cú pháp: string.replace(/oldValue/g,newValue);
let s8 = "Tôi cần học mỗi ngày để học giỏi hơn";
console.log(s8.replace(/học/g, "ngủ"));

// repeat(count): lặp chuỗi count lần
// count: số lần lặp lại chuỗi
let s9 = "Hello ";
console.log(`các chữ lập lại ${s9.repeat(5)}`);

// indexOf , lasIndexOf,includes
// cú pháp: string.indexOf(searchValue,fromIndex);
// tìm kiếm (searchValue) trong chuỗi.
// Nếu giá trị tìm kiếm không được tìm thấy, phương thức tar về -1
/** 
   fromIndex (tùy chọn): Vị trí bắt đầu tìm kiếm trong chuỗi.
   Nếu không được cung cấp,tìm kiếm bắt đầu từ dầu chuỗi 

*/
let s10 = "abcdef abcdef";
console.log(` vị trí kí tự được tìm kiếm trong chuõi là ${s10.indexOf("e")}`);
// tìm chữ "e" nhưng bắt đầu từ vị trí index 5;
console.log(`vị trí kí tự được tìm kiếm trong chuỗi là ${s10.indexOf("e", 5)}`); //kq:11
console.log(`vị trí kí tự được tìm kiếm trong chuỗi là ${s10.indexOf("g")}`); // kq: -1

// cú pháp: string.lastIndexOf(saerchValue,endIndex)
/**
Tìm kiếm giá trị xuất hiện cuối cùng của mỗi chuỗi tìm kiếm (saerchValue)
Nếu giá trị tìm kiếm không được tìm thấy,phương thức trả về -1
endIndex(tùy chọn): vị trí bắt đầu tìm kiếm trong chuỗi từ phải sang trái 
Nếu không tìm được cung cấp,tìm kiếm sẽ bắt đầu từ cuối chuỗi.
 */
let s11 = "abcdef abcdef abcdef";
console.log(
  `vị trí cuối cùng được tìm kiếm trong chuỗi là: ${s11.lastIndexOf("a")}`
);
console.log(s11.lastIndexOf("a", 11));

// cú pháp : string.includes(searchstring[,fromIndex]);
/**
Kiểm tra chuỗi con 
kiểm tra string có chứa cụm từ sáchtring nay không 
fromIndex (tùy chọn ): vị trí bắt đầu tìm kiếm trong chuỗi.
Nếu không nhập,tìm kiếm toàn bộ chuỗi 
*/
let s12 = "abcdefghk abcdefghk";
console.log(`kiểm tra kí tự có hay k ${s12.includes("a")}`);
console.log(`kiểm tra kí tự có hay k ${s12.includes("a", 11)}`);

// Cú pháp: string.startsWith(searchValue,[starIndex]);
/**
Kiểm tra chuỗi string có bắt đầu bằng saerchString không ?
startIndex (tùy chọn): vị trí bắt đầu tìm kiếm trong chuỗi.
Nếu không nhập, nó sẽ bắt đầu từ chuỗi.
 */
let s13 = "abcd abcd";
console.log(`kiểm tra chuôi bắt đầu bằng chữ a ${s13.startsWith("a")}`); //kq:true
console.log(
  `kiểm tra chuôi bắt đầu từ vị trí  bằng chữ a ${s13.startsWith("a", 3)}`
); // kq:flase

// Cú pháp: string.endsWith(searchValue,[endIndex])
/** 
Kiểm tra chuỗi gốc,có kết thúc bằng searchValue không?
endIndex(tùy chọn): Vị trí kết thúc tìm kiếm trong chuỗi gốc
Nếu bỏ trống: tìm kiếm hết chuỗi
*/
let s14 = "0123456789";
console.log(`kiểm tra chuỗi kết thúc có phải 9 khhong:${s14.endsWith("9")} `);
console.log(
  `kiểm tra chuỗi kết thúc có phải 5 khhong:${s14.endsWith("5", 6)} `
);

// vd Kiểm tra xem tên tệp âm thanh có kết thúc bằng.mp3
let s15 = "nhạc.mp3";
if (s15.endsWith("mp3")) {
  console.log("tệp tin là file âm thanh.mp3");
} else {
  console.log(`Tệp tin không phải là file âm thanh.mp3`);
}

// Cú pháp:string.split(separator,limit)
/**
1. string: chuỗi gốc cần tách 
2. separator: Chuỗi để xác định vị trí thực hiện tách.
Nó có thể là một ký tự hoặc một biểu thức chính quy.
3. limit (tùy chọn ): Giới hạn số lượng phần tử mảng kết
 */
let student = "Hoa,Lan,Ngọc,Lợi,Linh";
console.log(student.split(","));
console.log(student.split(",", 3));
// Nếu nhập vào"" thì sẽ tách rời từng ký tự mảng-> Mảng
let s16 = "abcdef";
console.log(`Tách kí tự mảng ra ${s16.split("")}`); //kq:a,b,c,d,e,f
// padStart: Thêm ký tự phía trước đến độ dài mong muốn
// cú pháp: string.padStart(targetLength,padString)
// targetLenght: Độ dài chuỗi sao khi được bổ xung
// padString: ký tự hoặc chuỗi ký tự dùng để bổ xung phía trước
let a = "abcd";
console.log(a.padStart(7, "123")); //kq;123abcd
// padEnd: Thêm ký tự phía sau đến độ dài mong muốn
//cú pháp: string.padEnd(targetLength,padString)
// targetLenght: Độ dài chuỗi sao khi được bổ xung
// padString: ký tự hoặc chuỗi ký tự dùng để bổ xung phía trước
let b = "abcd";
console.log(b.padEnd(7, "123")); //kq:abcd123
