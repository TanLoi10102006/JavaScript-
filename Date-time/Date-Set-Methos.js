// Date set Methods, định dnagj và xuất thời gian
// set thời gian theo ý muốn
// Cách 1: new Date(year,mounthIndex,day,hours,minutes,seconds,milliseconds)
let myDate = new Date(2025, 9, 10);
console.log(myDate);
console.log(myDate.toLocaleDateString()); //kq:10/10/2025
//cách 2: new Date(dateString)
let myDate2 = new Date("2025-09-02T06:30:10"); // T: để ngăn cách lịch ngày và thời gian
console.log(myDate2);
console.log(myDate2.toLocaleDateString());
// Cách 3: Sử dụng setFullYear,setMonth,setDate
let myDate3 = new Date();
console.log(myDate3);
myDate3.setFullYear(2024);
myDate3.setMonth(10);
myDate3.setDate(16);
console.log(myDate3);
console.log(myDate.toLocaleDateString());
// sử dụng toLocaleDateString()
// cách 1: với thông số địa phương
console.log(myDate.toLocaleDateString("en-GB")); // "10/10/2025"
console.log(myDate.toLocaleDateString("ja-JP")); // "2025/10/10"
// cách 2: Tùy chọn
// Các loại tùy chọn phổ biến
/**| Tên tùy chọn   | Giá trị hợp lệ                                            | Mô tả                                   |
| -------------- | --------------------------------------------------------- | --------------------------------------- |
| `weekday`      | `"narrow"`, `"short"`, `"long"`                           | Hiển thị thứ (T,th 2,Thứ hai)     |
| `year`         | `"numeric"`, `"2-digit"`                                  | Năm đầy đủ hoặc 2 chữ số cuối           |
| `month`        | `"numeric"`, `"2-digit"`, `"narrow"`, `"short"`, `"long"` | Tháng dạng số, tên viết tắt hoặc đầy đủ |
| `day`          | `"numeric"`, `"2-digit"`                                  | Ngày trong tháng                        |
| `hour`         | `"numeric"`, `"2-digit"`                                  | Giờ (nếu dùng kèm định dạng thời gian)  |
| `minute`       | `"numeric"`, `"2-digit"`                                  | Phút                                    |
| `second`       | `"numeric"`, `"2-digit"`                                  | Giây                                    |
| `timeZoneName` | `"short"`, `"long"`                                       | Hiển thị múi giờ                        |
| `hour12`       | `true`, `false`                                           | Dùng định dạng 12h (AM/PM) hay 24h      |
 */
/**Dùng "vi-VN" để hiển thị kiểu ngày tháng Việt Nam.

Dùng "en-US" cho định dạng kiểu Mỹ (MM/DD/YYYY).

Dùng "en-GB" cho kiểu châu Âu (DD/MM/YYYY). */
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const MyDate = new Date();
console.log(myDate.toLocaleDateString("en-US", options));
//Friday, October 10, 2025
// Xuất ngày tháng năm theo định dạng tự mong muốn
let myDate4 = new Date();
console.log(
  `Ngày${myDate4.getDate()}/Tháng ${
    myDate4.getMonth() + 1
  }/Năm ${myDate4.getFullYear()}`
);
// Thêm 0 để xuất ngày tháng dạng 01,02....
let myDate5 = new Date();
let myDate6 = myDate5.getDate() < 10 ? "0" : "";
let mymonth = myDate5.getMonth() < 9 ? "0" : "";
console.log(
  `Ngày ${myDate6}${myDate5.getDate()}/Tháng ${mymonth}${myDate5.getMonth()}/Năm${myDate5.getFullYear()}`
);
