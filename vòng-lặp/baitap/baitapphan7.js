// bài tập : Viết chương trình cho người nhập vào số năm sinh vào r tính ra tuổi

function inputYear() {
  let count = 0;
  while (true) {
    let year = prompt("Mời bạn nhập năm sinh:");
    let NumberYear = Number(year);

    // Kiểm tra đầu vào không hợp lệ
    if (!Number.isInteger(NumberYear) || NumberYear <= 0) {
      count++;
      alert("Bạn đã nhập sai, mời bạn nhập lại.");
      alert("Bạn đã nhập sai " + count + "/5 lần.");

      if (count === 5) {
        alert("Bạn đã nhập sai 5 lần. Bạn không được nhập nữa.");
        return;
      }
      continue;
    }

    // Tính tuổi
    let CurrentYear = new Date().getFullYear();
    let age = CurrentYear - NumberYear;

    // Kiểm tra tuổi không hợp lệ
    if (age >= 130) {
      count++;
      alert("Người này không tồn tại. Mời bạn nhập lại.");
      alert("Bạn đã nhập sai " + count + "/5 lần.");

      if (count === 5) {
        alert("Bạn đã nhập sai 5 lần. Bạn không được nhập nữa.");
        return;
      }
      continue;
    }

    // Nếu hợp lệ
    alert("Tuổi của bạn ở thời điểm hiện tại là " + age);
    break;
  }
}
inputYear();

// yêu cầu người dùng nhập vào số phút để bắt đầu tính giờ làm bài nếu làm hết thời gian bằng k thì thông báo hết thời gian

function countdown(minute) {
  console.log(`số phút bạn nhập làm ${minute}`);
  let second = minute * 60;
  let countdownInterval = setInterval(function () {
    let minuteDown = Math.floor(second / 60); // Lấy phân nguyên làm phút
    let secondDown = second % 60; // lấy phần dư làm giây
    let prefixSecondFormat = secondDown < 10 ? "0" : "";
    console.log(`${minuteDown}:${prefixSecondFormat}:${secondDown}`);
    if (second <= 0) {
      alert("Hết thời gian làm bài yêu cầu nộp bài");
      clearInterval(countdownInterval);
    } else {
      --second;
    }
  }, 1000);
}
function countdown(minute) {
  console.log(`số phút bạn nhập làm ${minute}`);
  let second = minute * 60;
  let countdownInterval = setInterval(function () {
    let minuteDown = Math.floor(second / 60); // Lấy phân nguyên làm phút
    let secondDown = second % 60; // lấy phần dư làm giây
    let prefixSecondFormat = secondDown < 10 ? "0" : "";
    console.log(`${minuteDown}:${prefixSecondFormat}${secondDown}`);
    if (second <= 0) {
      alert("Hết thời gian làm bài yêu cầu nộp bài");
      clearInterval(countdownInterval);
    } else {
      --second;
    }
  }, 1000);
}
// hàm kiểm tra nhập liệu
function number(minute) {
  return Number.isInteger(minute) && minute > 0;
}
while (true) {
  let minute = Number(prompt("mời bạn nhập số phút làm bài"));
  if (number(minute)) {
    countdown(minute);
    break;
  } else {
    alert("Bạn nhập sai vui lòng nhập lại");
  }
}
// Viết chương trình có tên timeSince, Thông báo người dùng offline x phút .....
// vd :  yêu cầu : update hiển thị thời gian A offline
//  "x giây trước " "x phút trước" "x ngày trước " " x tháng trước " "x năm trước"
function TimeOff(timestamp) {
  let TimestampNow = Date.now();
  console.log(TimestampNow);
  let timeDifference = TimestampNow - timestamp;
  console.log("kq khi trừ ra còn lại bao nhiêu giây là  ", timeDifference);
  let second = Math.floor(timeDifference / 1000);
  let minute = Math.floor(second / 60);
  let hour = Math.floor(minute / 60);
  let day = Math.floor(hour / 24);
  let mounth = Math.floor(day / 30);
  let year = Math.floor(mounth / 12);
  if (year > 0) {
    return `Online${year} năm trước `;
  } else if (mounth > 0) {
    return `Online ${mounth} tháng trước `;
  } else if (day > 0) {
    return `Online ${day} ngày trước `;
  } else if (hour > 0) {
    return `Online ${hour} giờ trước `;
  } else if (minute > 0) {
    return `Online ${minute} phút trước`;
  } else if (second > 0) {
    return `Online ${second} giây trước`;
  }
}
let timestamp = 1752825748519; // Thời điểm bạn A off
console.log(TimeOff(timestamp));
