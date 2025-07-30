/** Bài tập 1: tìm x,y khi biết tổng và hiệu của chúng  */
let Addition = parseFloat(prompt("Mời bạn nhập tổng"));
let Subtraction = parseFloat(prompt("Mời bạn nhập hiệu"));
let kq1 = parseFloat((Addition + Subtraction).toFixed(2));
let kq2 = parseFloat((Addition-Subtraction).toFixed(2));
let  x = parseFloat((kq1/2).toFixed(2));
let y = parseFloat((kq2/2).toFixed(2));

if(Number.isNaN(Addition) || Number.isNaN(Subtraction)){
    alert("Bạn chỉ được phép Nhập số thôi ");

}else{
    console.log(`kết quả x= ${x}`);
    console.log(`kết quả y= ${y}`);

}
//** Viết chương trình nhập vào chiều cao,cân nặng,tính BMI và xuất ra thông báo
// Gợi ý BMI= cân nặng / (chiều cao ^2);
let Weight = parseFloat(prompt("Mời bạn nhập cân nặng "));
let height = parseFloat(prompt("Mời bạn nhập chiều cao"));
let BMI = parseFloat((Weight / (height ** 2)).toFixed(2));

if (Number.isNaN(Weight) || Number.isNaN(height) || Weight <= 0 || Weight > 635 || height <= 0 || height > 2.72) {
    alert("Mời bạn nhập chiều cao và cân nặng hợp lệ (bằng số)");
} else if (BMI < 15) {
    console.log(`Thân hình quá gầy. BMI = ${BMI}`);
} else if (BMI >= 15 && BMI < 16) {
    console.log(`Thân hình hơi gầy. BMI = ${BMI}`);
} else if (BMI >= 16 && BMI < 18.5) {
    console.log(`Thân hình gầy. BMI = ${BMI}`);
} else if (BMI >= 18.5 && BMI < 25) {
    console.log(`Thân hình bình thường. BMI = ${BMI}`);
} else if (BMI >= 25 && BMI < 30) {
    console.log(`Thân hình hơi béo. BMI = ${BMI}`);
} else if (BMI >= 30 && BMI < 35) {
    console.log(`Thân hình béo. BMI = ${BMI}`);
} else {
    console.log(`Thân hình quá béo. BMI = ${BMI}`);
}
/** Viết chương trình nhập vào 1 năm dương lịch,kiểm tra năm đó có phải là năm nhuận hay k
  Gợi ý : Năm nhuận chia hết cho 4 hoặc k chia hết cho 100 và chai hết cho 400 ?
 */
let nam=parseFloat(prompt("MỜi bạn nhập số năm cần kiểm tra"));
if(Number.isNaN(nam) || nam<0  ){
    alert("Yêu cầu bạn chỉ được phép nhập số thôi k được nhập chữ  ");
}else if(((nam%4===0)&&(nam%100!==0))||(nam%400===0)){
    console.log("năm này là năm nhuận ",nam);
}else{
    console.log("năm này k phải là năm nhuận ",nam);
}
/** Viết chương trình báo cáo cho người dùng nhập và 1 tháng bất kỳ từ 1-->12 cho biết tháng đó có bao nhieu ngày 
    Gợi ý : Tháng 1,3,5,7,8,10,12 có 31 ngày ;
            Tháng 4,6,9,11 có 30 ngày 
    Nếu tháng 2 thì yêu cầu nhập thêm năm 
    + nếu năm nhuận thì tháng 2 có 29 ngày 
    + năm không nhuận thì tháng 2 có 28 ngày 
    Tổng số ngày trong năm đó nếu là năm nhuận thì có 366 ngày 
    năm k nhuận ra 365
 */
let month = parseInt(prompt("Mời bạn nhập tháng"));
if (Number.isNaN(month) || month < 1 || month > 12) {
    alert("Yêu cầu bạn chỉ được phép nhập số từ 1 đến 12, không được nhập chữ");
} else if (month === 1 || month === 3 || month === 5 || month === 7 || 
           month === 8 || month === 10 || month === 12) {
    console.log(`Tháng ${month} có 31 ngày`);
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(`Tháng ${month} có 30 ngày`);
} else if (month === 2) {
    let year = parseInt(prompt("Mời bạn nhập năm"));
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
        console.log(`Tháng 2 năm ${year} có 29 ngày, số ngày năm nhuận là 366 ngày`);
    } else {
        console.log(`Tháng 2 năm ${year} có 28 ngày, số ngày năm không nhuận là 365 ngày`);
    }
}
// Viết phương trình cho người nhập vào a,b,c để tính phương trình bậc 2 //
let a=parseFloat(prompt("Mời bạn nhập số a"));
let b=parseFloat(prompt("Mời bạn nhập só b"));
let c=parseFloat(prompt("Mời bạn nhập số c"));
let delta=parseFloat(Math.pow(b,2)-4*a*c);
if (Number.isNaN(a)|| Number.isNaN(b)|| Number.isNaN(c)){
    alert("bạn k được phép nhập chữ vui lòng nhập lại ")
}else if (a===0){
    alert("Đây k phải là phương trình bậc 2")
}else if(delta>0){
    let x1 = parseFloat((-b+Math.sqrt(delta))/(2*a));
    let x2 = parseFloat((-b-Math.sqrt(delta))/(2*a));
    alert(`Phương trình có 2 nghiệm phân biệt x1= ${x1} x2= ${x2}`);
}else if(delta===0){
    let x3 = parseFloat(-b/(2*a));
    alert(`Phương trình có nghiệm kép x= ${x3}`);
}else{
    alert(`Phương trình không có nghiệm thực`)
}
//- Máy sẽ “nghĩ ra” một số ngẫu nhiên từ 1 đến 10.
// - Người dùng đoán cho đến khi đúng thì mới dừng lại, mỗi lần đoán thì gợi ý số lớn hơn hay nhỏ hơn.
let random=Math.floor(Math.random()*11);
let numbera=parseInt(prompt("Mời bạn đoán số "));
if(Number.isNaN(numbera)){
    alert("bạn k được nhập chữ vui lòng nhập đại");
}else if(numbera>random){
    alert(`Bạn đã đoán số lớn hơn đáp án ${random}`);
}else if(numbera<random){
    alert(`Bạn đã đón số nhỏ hơn đáp án ${random}`);
}else{
    alert(`Chúc mừng bạn đã đoán đúng đáp án ${random}`);
}
// Viết chương trình nhập tháng trong năm ,cho biết tháng đó thuộc quý mấy //
// Gợi ý 1 năm có 4 quý mỗi quý 3 tháng // 
let thang=parseInt(prompt("Mời bạn nhập tháng vào "));
if(Number.isNaN(thang)|| thang<0||thang>12){
    console.log("bạn đã nhập sai vui lòng nhập lại ");
}else if (thang === 1 || thang === 2 || thang === 3) {
    console.log(`Tháng ${thang} thuộc quý 1`);
}else if (thang===4||thang===5||thang===6){
    console.log(`Tháng ${thang} thuộc quý 2`)
}else if (thang===7||thang===8||thang===9){
    console.log(`Tháng ${thang} thuộc quý 3`)
}else {
    console.log(`Tháng ${thang} thuộc quý 4`)
}




