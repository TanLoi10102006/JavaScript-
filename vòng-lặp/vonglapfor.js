/**for (khởi_tạo; điều_kiện; cập_nhật) {
  // khối lệnh được thực thi mỗi vòng lặp
}
   */
  for(let i=7;i<20;i++){
    console.log(i);
  }
  // vd xuất các số chẵn từ 0 đến 10
  for(let e=0;e<=10;e+=2){
    console.log(e);
  }
//vd 3 : tính tổng các số chẵn từ 0 đến 10
let tong=0;
for (let g =0;g<=10;g+=2){
    console.log('tất cả các giá trị chạy được là ',g);
}
 console.log(tong+=g);
 // continue ,break
 // continue : bỏ qua 
 let n=0;
 while(n<100){
    n++;
    if(n===4){
        break;
    }
   console.log(n);
 } 
 // vd 
 

for (let f = 1; f <= 10; f++) {
  if (f % 2 !== 0) {
    continue; // bỏ qua các số lẻ
  } else {
    console.log(f); // dùng f thay vì i
    console.log("Tổng các số đó cộng lại là ", tong += f);
  }
}
//// vd thực tế
for (let i = 1; i <= 20; i++) {
  if (i % 7 === 0) {
    console.log("Gặp số chia hết cho 7:", i);
    break; // dừng vòng lặp tại đây
  }
  console.log("Đang kiểm tra:", i);
}
