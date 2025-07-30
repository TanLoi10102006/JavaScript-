// Bài tập : viết chương trình cho người nhập n số nguyên thành chiều dài mnagr r nhập n phần tử sao đó tính tổng
let M = [];
let n;
while (true) {
  n = Number(prompt("Mời người dùng nhập số nguyên "));
  if (Number.isInteger(n) && n > 0) {
    break;
  }
}
console.log("Giá trị bạn đã nhập là " + n);

// Duyệt từng giá trị của mảng
for (let i = 0; i < n; i++) {
  console.log(i);
  let index = Number(prompt(`Mời bạn nhập mảng giá trị thứ ${i + 1}`));
  console.log(index);
  M.push(index); // thêm vào mảng nếu bạn định lưu lại
}
console.log(M);
let sumM = M.reduce((a, b) => a + b, 0);
console.log(`Tổng các số đã nhập là ${sumM}`);

/**- Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên, có n phần tử ngẫu nhiên, n do người dùng nhập từ bàn phím.
- Xuất các giá trị trong mảng.
- Đảo ngược mảng, và xuất mảng sau khi đảo ngược.
- Sắp xếp mảng tăng dần.
- Tính tổng các phần tử trong mảng.
- Cho người dùng nhập 1 số bất kỳ, kiểm tra số đó có tồn tại trong mảng hay không, nếu có xuất ra vị trí index của số đó trong mảng.
 */

let arr = [];
let N;

// Nhập chiều dài mảng
while (true) {
  N = Number(prompt("Mời bạn nhập chiều dài mảng"));
  if (Number.isInteger(N) && N > 0) {
    break;
  } else {
    alert("Vui lòng nhập số nguyên dương!");
  }
}
console.log(`Độ dài mảng đã nhập: ${N}`);

// Nhập từng giá trị
for (let i = 0; i < N; i++) {
  let giatri = Number(prompt(`Giá trị thứ ${i + 1}`));
  arr.push(giatri);
}
console.log("Mảng vừa nhập:", arr);

// Đảo ngược mảng
let reversed = [...arr].reverse();
console.log("=== Mảng đảo ngược ===");
console.log(reversed);

// Sắp xếp tăng dần
let ascending = [...arr].sort((a, b) => a - b);
console.log("=== Mảng sắp xếp tăng dần ===");
console.log(ascending);

// Tính tổng
let total = arr.reduce((a, b) => a + b, 0);
console.log(`Tổng các giá trị trong mảng là: ${total}`);

// Kiểm tra số có tồn tại  nếu có xuất vị trí index của nó ra

let input;
while (true) {
  input = Number(prompt("Mời bạn nhập số nguyên bất kỳ:"));
  if (Number.isInteger(input)) {
    break;
  } else {
    alert("Giá trị không hợp lệ! Nhập lại.");
  }
}

let indexArray = [];
for (let i = 0; i < N; i++) {
  if (input === arr[i]) {
    indexArray.push(i);
  }
}
if (indexArray.length > 0) {
  console.log(`Số ${input} xuất hiện tại index: ${indexArray.join(", ")}`);
} else {
  console.log(`Số ${input} không có trong mảng.`);
}
