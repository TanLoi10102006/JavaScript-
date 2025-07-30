// oop buổi 1 tổng quan về-Literal syntax###
let a = 9;
let b = 5.5;
console.log(typeof a);
console.log(typeof b);
let check = true;
console.log(typeof check);
let str = "Đoàn Tấn Lợi";
console.log(typeof str);

// sử dụng hướng đối tượng
//  Literal syntax: Sử dụng cặp dấu {} để định nghĩa 1 đối tượng mới với các cặp key value
let student = {
  fullname: "Đoàn Tấn Lợi",
  birthYear: 2006,
  address: {
    city: "An Giang",
    country: "Việt Nam",
  },
  scores: [8, 9, 10],
  // phương thức
  //vd1  Phương thức tính tuổi
  getAge: function () {
    return 2025 - this.birthYear;
  },

  // phương thức viết lại để trả về 1 thuộc tính
  getAge2: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  //vd2 Phương thức để đi tính điểm trung bình
  diemTrungbinh: function () {
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    return sumScores / 3;
  },
};
console.log(student);
console.log(typeof student);

// Literal syntax:
// Có thể khai báo key dưới dạng chuỗi (key có thể chứa các ký tự đặc biệt bất kỳ,thậm chí có thể vi phậm nguyên tắc đặt tên biến )
let teacher = {
  "1 Fullname": "Chicken",
  "@address": {
    city: "hanoi",
    country: "việt nam",
  },
};

//###########
// Sử dụng thuộc tính: Dot Notation. và Bracket Notation[]
// Sử dụng dot (.) - Dot Notation
console.log(student["fullname"]);
console.log(`Xuất tên của học sinh là `, student.fullname);
console.log(`Xuất điểm 3 môn của học sinh là `, student.scores);
console.log(student.diemTrungbinh());
console.log(student.address.city);
console.log(student.address.country);
console.log(`Địa chỉ: ${student.address.city}, ${student.address.country}`); // Xuất gọp lại
// Sử dụng []- Bracket Notation- và truyền vào giá trị của key
// Bracket dùng khi không có khí tự đặc biệt- có khoản trắng, vi phạm quy tắc đặt tên biến
console.log("tên giáo viên là", teacher["1 Fullname"]);
console.log(teacher["@address"].city);
console.log(teacher["@address"].country);
let diaChi = teacher["@address"];
console.log(`Địa chỉ: ${diaChi.city}, ${diaChi.country}`); // xUất toàn bộ đại chỉ
console.log(
  `Địa chỉ: ${teacher["@address"].city}, ${teacher["@address"].country}` // Xuất toàn bộ đại chỉ
);
// Linh động sử dụng [] với biến
let input = prompt(
  "bạn mún biết thông tin nào của học sinh:( fullname,birthYear,address)"
);
console.log("thông tin bạn nhận được là", student[input]); // Nếu xuất về key k tồn tại trả về undefind

// vd: Kiểm tra xem nhập key không tồn tại thì báo lỗi
console.log(student[input]);
console.log(Boolean(student[input]));
if (student[input]) {
  console.log(student[input]);
} else {
  console.log("Inphut bạn nhập vô k tồn tại");
}

// Vấn Đề: (Giả sử trong chương trình bạn cần gọi nhiều lần getAge)
// --> Chương trình của bạn sẽ mất nhiều lần tính toán do hàm bị gọi đi gọi lại nhiều lần
console.log(student.getAge());
console.log(student.getAge());
console.log(student.getAge());
console.log(student.getAge());

// Gọi phương thức getAge2
student.getAge2();
// xuất thử tuổi thông qua thuộc tính agge mới được thêm từ phương thức getAge2
console.log(student.age);

//##################3
// Thêm hoặc xóa thuộc tính (thêm cặp key value);
student.email = "doantanloi10102006@gmail.com";
student["website"] = "htttp/";
console.log(student.email);
console.log(student);
console.log(student["website"]);

// Xóa bỏ thuộc tính
delete student.email;
console.log(student);
delete student.address.city;
console.log(student.address);
delete teacher["@address"].country;
console.log(teacher);

// sửa thuộc tính
student.birthYear = 2000;
console.log(student.birthYear);
console.log(student);
teacher["@address"] = "Đà lạt";
console.log(teacher["@address"]);
console.log(teacher);
