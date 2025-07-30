/** Toán tử logic 
 * Toán tử AND (kí hiệu &&) 2 cái true --> true
                            1 cái true 1 cái false --> false
                            2 cái false --> false
 * Toán tử OR (kí hiệu ||)  2 cái true --> true
                            1 cái true 1 cái false --> true
                            2 cái false --> False
 * Toán tử phủ định ( kí hiệu !) true ! --> false
                                 false ! --> true
 */

let i = 10;
// kiểm tra i > 5 và i < 20 không ?
console.log(i>5 && i>20);
console.log(i>5);
console.log(i>20);
// Toán tử OR
console.log(i<7||i>20);
// Toán tử phủ định !
console.log(!(i>4));
