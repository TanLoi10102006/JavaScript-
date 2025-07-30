// var và let , hoisting trong js 

console.log("Giá trị của biến c =",c);
// khởi tạo
 var c =9; 
 // cách js hiểu 
 /**
    var c ;
    console.log("Giá trị của biến c="+c);
    //khởi tạo c 
    c=9
  */
 // var có phạm vi là function scope:
 // -> Nếu 1 biến được khai báo bằng var phạm vi của nó sẽ là phạm vi của hàm (function) 
//  -> Biến sẽ đuộc đẩy lên đầu phạm vi Function Scope

function exampleVar(){
    if (true){
        var y=20; // khởi tạo y nằm trong phạm vi block scope
        console.log(`${y} trong block scope`)
    }
    console.log(`${y} trong phạm vi function scope`);
}
exampleVar()
// js hiểu 
function exampleVar(){
    var y; // hosting 
    if (true){
        y=20; // khởi tạo y nằm trong phạm vi block scope
        console.log(`${y} trong block scope`)
    }
    console.log(`${y} trong phạm vi function scope`);
}
exampleVar()

// let,const: Có phạm vi là block scope:
// -> Nếu một biến được khai báo bằng let,const phạm vi của nó sẽ là phạm vi block 
// -> Biến sẽ được đẩy lên đầu phạm vi blockscope 

function exampleBlockScope(){
    if(true){
        let b =40;
        console.log(b);// có thể truy cập b trong cùng phạm vi block 
    }
    // console.log(`${b} trong phạm vi hàm `) // lỗi vì biến b chỉ xuất được trong block scope 
}
exampleBlockScope()


// var có thể khai báo lại một biến sử dụng var mà k gây lỗi
var diemVan=9;
var diemVan=5;
console.log(diemVan); // kq ra 5 
// let không thể khai báo lại một biến sử dụng let trong cùng một phạm vi
let diemToan=7;
