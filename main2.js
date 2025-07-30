/*
Giới thiệu một số hàm built-in 
    1. Alert
    2. Console
    3. Confirm
    4. Promt
    5. Set timeout 
    6. Set interval

*/
// Console.log : ghi một hoặc nhiều giá trị ra màng hình console
var fullName= ('Đoàn Tấn Lợi ');
console.log(' Đây là 1 dòng log ') 
console.log(fullName);
//Console.error: ghi thông báo lỗi ra console 
console.error(fullName);
console.error('dòng này bị lỗi ');
// Confirm: được sử dụng để hiện thị ra một hộp thoại xác nhận với người dùng
confirm('Nếu bạn đủ 18 tuổi thì nhắn oke ?');
var string=('tuổi 18 nhắn oke ')
confirm(string );
// Prompt : hiện thông báo kêu người dùng nhập dữ liệu vào 
prompt('mời bạn nhận dữ liệu ');
// Set timeout : thực hiện 1 đoạn mã sau 1 khoản thời gian nhất định được tính bằng mili giây 
setTimeout( function(){
    alert(fullName)
   
} ,5000);
setTimeout( function(){
    confirm('nếu nó xuất hiện thì bạn nhắn oke ?')
    

} ,10000);
setTimeout( function(){
    console.log(' Đây là 1 dòng log '); 
    
} ,15000);
// Setinterval: được sử dụng để lập lại 1 đoạn mã sau mỗi giây
setInterval(function(){
    console.log( 'Đây là log  ');
},3000);