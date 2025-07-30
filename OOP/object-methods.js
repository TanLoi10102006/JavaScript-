//1. Object.key(obj)
// Phương thức này trả về một mảng chứa tất cả các key (tên thuộc tính) của đối tượng
let person = {
  name: "Lợi",
  age: "18",
};
let keys = Object.keys(person);
console.log(keys); // Cách xuất thứ nhất
console.log(Object.keys(person)); // Cách xuất thứ 2

//2. Object.values(obj);
// Phương thức này sẽ trả về mảng chứa tất cả các giá trị của đối tượng.
let phone = {
  name: "iphone 16 pro",
  MFGdate: 2024,
};
let value = Object.values(phone);
console.log(value);
console.log(Object.values(value));

//3. Object.entries(obj)
// Phương thức này trả về một mảng chứa các cặp[khóa,giá trị] của đối tượng dưới dạng mảng con
let car = {
  name: "toyota",
  Foundingdate: 1937,
};
console.log(Object.entries(car));

//4. Object.assign(obj)
// Sử dụng để sao chép các thuộc tính từ một hoặc nhiều đối tượng nguòn(source) vào một đối tượng đích(target)
let target = {
  c: 1000,
};
let honda = {
  name: "wave",
};
let suzuki = {
  CubicCentimeters: "125cc",
};
console.log(Object.assign(target, honda, suzuki));

// cách k thay đổi mnagr gốc:Object.assign({},obj)
let result = Object.assign({}, target, honda, suzuki);
console.log(result);
console.log(target); //kq:c:100cc

// Ngoài ra chúng ta có thể dùng tón tử spread(...) để sao chép thuộc tính
let target2 = { ...honda, ...suzuki };
console.log(target2);
