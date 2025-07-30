// Hoisting in function
/**
 1.Hoisting 
 Function Delaration: có hoisting. Bạn có thể gọi hàm trước khi nó được định nghĩa
 */
hostingFunction()
function hostingFunction(){
    console.log("xin chào bạn ")
}
/**
 Function Expression: không có hoisting. Bạn phải gọi hàm sau khi định nghĩa 
 */
nonHoistigFunction()
let nonHoistigFunction= function(){
    console.log("xin chào bạn")
}
nonHoistigFunction()
/**
 Arrow Function: không có function.phải gọi hàm sau khi định nghĩa 
 */
let Arrow=()=>{
    console.log('xin chào bạn')
}
Arrow()