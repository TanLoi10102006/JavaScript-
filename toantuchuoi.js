/**
 *  Toán tử chuỗi - String operator
 */
// toán tử cộng 
  var a = 9;
  var b= 11;
  console.log(a-b);
  //toán tử chuỗi
  var firsname = 'Loi';
  var lastname = 'Doan';
  console.log(firsname +  lastname);
  console.log(firsname + ' '+ lastname);// có khoảng cách
  // toán tử gán chuỗi
  var Dishname = 'phở';
  Dishname += ' bò';
  console.log(Dishname); 
  // phương thức concat()
  var fullname = firsname.concat(' ', lastname);
  console.log(fullname);
  // phương thức template literals (sử dụng backtick `)
  var firstname = "Loi"; 
  var lastname = "Doan"; 
  var fullname2 = `${firstname} ${lastname}`;
  console.log(fullname2); 