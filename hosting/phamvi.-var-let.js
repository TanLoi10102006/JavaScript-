//  Phạm vi sử dụng (Scope)-JavaScript Scope:
/**
 1. global scope: Phạm vi toàn cục,truy xuất được ở mọi nơi
 2. function-scope: phạm vi của hàm
 3. block-scope: Phạm vi của khối (block)
 Chẳng hạn như một trong if statement hoặc vòng lặp.
 */

 // 1.Global scope: Nếu biến được khai báo ảo phạm vi global thì có thể truy xuất ở mọi nơi
 let a=1;
 // truy xuất biến a
 console.log(a);


 function vD1(){
    // 2.Truy xuất biến global ở trong hàm 
    console.log(a);

    // Thử với phạm vi block scope
    if(a % 2 === 0) {
        console.log(`${a} là số chẵn`);
    } else {
        console.log(`${a} là số lẻ`);
    }
}
 // Gọi hàm
 vD1();2
 

 // 2.function scope:
 function vD2(){
    let b=2
    // 1.biến b chỉ có thể truy xuất từ bên trong hàm 
    console.log(b);
    // 2. truy xuất từ các cấp sâu hơn bên trong hàm 
    if(b%2===0){
        console.log(`${b} là số chẵn `)
    } else{
        console.log(`${b} là số lẻ `)
    }
 }
 // gọi hàm
 vD2()


 // 3. Block scope: biến được khai báo trong {}
 let n=3;
 let m=10;
 if(n===3){
    // Nằm trong đây gọi là block scope 
    let m=1; // Nếu khai báo trong block scpoe thì chúng ta có thể truy xuất được cùng cấp oặc các cấp nhỏ hơn
    console.log(m);
    if(m%2==0){
        console.log(`${m} là số chẵn `)
    }else{
        console.log(`${m} là số lẻ `)
    }
 }
 console.log(m); 