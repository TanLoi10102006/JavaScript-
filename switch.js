// switch case js 
let numbera= parseFloat(prompt("mời bạn nhập só"));
console.log(typeof numbera)
switch(numbera%2){
    case 0:
        console.log("số chẵn")
        break;
    case 1:
        console.log("số lẻ ");
        break;
    default:
        console.log("không phải số");
}
// Bài tập nhập tháng sử dụng switch 
let month=parseInt(prompt("Mời bạn nhập số tháng "));
switch(mounth){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("tháng có 31 ngày ");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("tháng có 30 ngày");
        break;
    case 2:
        console.log("tháng 2 có 28 hoặc 30 ngày");
        break;
    default:
        console.log("tháng k tồn tại");
    
}
// Bài tập áp dụng switch case 
// viết chương trình khung tìm kiếm : cho người dùng nhập vào //
// Gợi ý :1 tìm theo tên 
//        2 tìm theo tác giả 
//        3 tìm theo tiêu đề 
//        4 Thoát nếu bấm k hợp lệ
let a=parseInt(prompt(`
   Chọn cách tìm kiếm:
    1. tìm  kiếm theo tên
    2. tìm  kiếm tác giả
    3. tìm kiếm theo tiêu đề `));
    switch(a){
        case 1:
            alert("Bạn đã chọn tìm kiếm theo tên");
            break;
        case 2:
            alert("bạn đã chọn tìm kiếm theo tác giả  ")
            break;
        case 3:
            alert("bạn đã chọn tìm kiếm theo nhà xuất bản ");
            break;
        case 4:
            alert("bạn đã chọn tìm theo tiêu đề;")
            break;
        default:
            alert("bạn đã nhậm k hợp lệ")
            break;// dùng break hay k tùy ý
    }