/** viết chương trình nhập vào số nguyên n, in ra kết quả n! */
// dùng vòng lặp for và while
// kiểm tra 1 số có phải là số nguyên k
let a =parseFloat(prompt("mời bạn nhập số "));
if (a%1===0){
    console.log(`${a} 0 phải là số nguyên `);

}else{
    console.log(`${a} 0 phải là số nguyên`);

} 
console.log(Number.isInteger(9,7));
//  giải bài giai thừa
let numbera = parseInt(prompt("Mời bạn nhập số nguyên dương n:"));

// Kiểm tra và yêu cầu nhập lại nếu sai
while (Number.isNaN(numbera) || numbera < 0 || !Number.isInteger(numbera)) {
  alert("Bạn đã nhập sai, vui lòng nhập lại!");
  numbera = parseInt(prompt("Mời bạn nhập số nguyên dương n:"));
}

console.log("Số bạn nhập là:", numbera);

// Tính giai thừa
let gt = 1;
for (let i = 1; i <= numbera; i++) {
  console.log("Nhân với:", i);
  gt *= i;
}

console.log(`${numbera}! = ${gt}`);
// viết chương trình nhập số nguyên a từ bàn phím 
// nếu a chẵn thì tính tổng các số chẵn từ 0 đến a 
// nếua là số lẻ thì in ra dòng chữ " tôi k tính tổng số lẻ bye bye "và thoát khỏi chương trình ;
let numberb = parseFloat(prompt("Mời bạn nhập số nguyên vào"));

while (isNaN(numberb) || numberb <= 0 || !Number.isInteger(numberb) ) {
  alert("Bạn đã nhập sai. Vui lòng nhập một số nguyên dương.");
  numberb = parseFloat(prompt("Mời bạn nhập số nguyên vào"));
}

if (numberb % 2 === 0) {
  let sum = 0;
  for (let i = 0; i <= numberb; i += 2) {
    sum += i;
  }
  alert(`Tổng các số chẵn từ 0 đến ${numberb} là ${sum}`);
} else {
  alert(`${numberb} là số lẻ. Tôi không tính tổng số lẻ. Tạm biệt!`);
}
// viết chương trình tính tổng các số lẻ từ 1 đến n , n nhập từ bàn phím 
// Nhập n =7 bỏ qua k cộng tổng với số 3 r in ra kết quả 
let n = parseFloat(prompt("Mời bạn nhập số nguyên lẻ vào:"));
while (Number.isNaN(n) || n < 0 || !Number.isInteger(n)) {
  alert("Bạn đã nhập sai, vui lòng nhập lại");
  n = parseFloat(prompt("Mời bạn nhập số nguyên vào:"));
}

if (n % 2 !== 0) {
  let tong = 0;
  for (let i = 1; i <= n; i += 2) {
    if (i === 3) { /** hoặc có thể viết là if (i!==3){
    tong+=i; 
    } */
      continue; // nếu mún dừng ở 3 thì dùng hàm break;
    }
    tong += i;
  }
  alert(`Số bạn nhập ${n}, tổng các số lẻ từ 1 đến ${n} (trừ 3): ${tong}`);
} else {
  alert(`Số bạn nhập ${n} không phải là số lẻ`);

}
// viết chương trình cho ng chơi nhập vào số nguyên r tìm những số chia hết cho 3 từ số nguyên đó đến n
let number0 = parseInt(prompt("Mời bạn nhập số nguyên:"));

while (isNaN(number0) || number0 < 0 || !Number.isInteger(number0)) {
  alert("Bạn đã nhập sai, vui lòng nhập lại.");
  number0 = parseInt(prompt("Mời bạn nhập số nguyên lại:"));
}

let ketQua = "";   // chứa danh sách số chia hết cho 3
let dem = 0;       // đếm số lượng

for (let i = 1; i <= number0; i++) {
  if (i % 3 === 0) {
    ketQua += i + " ";
    dem++;
  }
}

if (dem > 0) {
  alert(`Từ 1 đến ${number0} có ${dem} số chia hết cho 3:\n${ketQua}`);
} else {
  alert(`Không có số nào chia hết cho 3 từ 1 đến ${number0}.`);
}
//////////////////////////////////////////
// tính tổng giai thừa //
let h = parseInt(prompt("Nhập số nguyên dương n:"));

while (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
  alert("Bạn nhập sai. Vui lòng nhập số nguyên dương.");
  n = parseInt(prompt("Nhập lại số nguyên dương n:"));
}

let tong = 0;

for (let i = 1; i <= h; i++) {
  let giaiThua = 1;
  for (let j = 1; j <= i; j++) {
    giaiThua *= j;
  }
  tong += giaiThua;
}

alert(`Tổng các giai thừa từ 1 đến ${h} là: ${tong}`);
// Bài tập nhập số nguyên tố kiểm tra số đó phải số nguyên tố k
while (true) {
  let nhapso = Number(prompt("Mời bạn nhập số"));

  while (!Number.isInteger(nhapso) || nhapso < 0) {
    nhapso = Number(prompt("Nhập lại số nguyên dương:"));
  }

  alert("Giá trị của số bạn nhập là: " + nhapso);

  let songuyento = true;

  if (nhapso < 2) {
    songuyento = false;
  } else {
    for (let i = 2; i < nhapso; i++) {
      if (nhapso % i === 0) {
        songuyento = false;
        break;
      }
    }
  }

  if (songuyento) {
    alert(nhapso + " là số nguyên tố.");
  } else {
    alert(nhapso + " không phải là số nguyên tố.");
  }

  break;
}