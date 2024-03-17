










// Quvonchbek aka hali tugatmadim bir ikkitasida kamchiligi bor 
















// // 1-savol

// // Ixtiyoriy arrow function yarating va unga beriladigan argument promt yordamida kiritilgan son bo'lsin. Kiritilgan sonning raqamlari yig'indisi topilsin.

// let num = ["12"];
// const x = (a) => {
//     let result = [];
//     for (let i = 0; i < a.length; i++){
//         result += a[i]
//     }
//     return result;
// }

// console.log(x(num));

// // 3-savol
// // Promt yordamida ixtiyoriy son kiritilsin va o'sha sonning kvadradi palindrome yoki palindrome emasligi topilsin algorithm function ichida bo'lsin

// let num2 = prompt("");

// const a = (a) => {
//     let newNum = "";
//     a = a * a;
//     for (let i = a.length - 1; i >= 0; i--){
//         newNum += a[i];
//     }
//     return newNum == a
// }

// console.log(a(num2));


// //  18dan katta yoshlar nechtaliginin sanash==============================================================

// let arr = [
//     {
//         age:16,
//     },
//     {
//         age:29,
//     },
//     {
//         age:36, 
//     },
//     {
//         age:11,
//     },
// ]

// const x = (a) => {
//     let result = 0;
//     for (let i of a){
//         if (i.age > 18){
//             result++
//         }
//     }
//     return result;
// }

// console.log(x(arr));

// // juft sonlarni yigish===========================================================================

// let num = [22,23,24,25,26,2,7]
// const x = (a) => {
//     let newArr = [];
//     for (let i of a){
//         if (i % 2 == 0){
//             newArr.push(i)
//         }
//     }
//     return newArr;
// }

// console.log(x(num));

// // harflar bilan raqamlarni ajratish====================================================================

// let num = [22,"s",23,"d",24,25,"n",26,2,7]
// const x = (a) => {
//     let newArr = [];
//     let strArr = [];
//     for (let i of a){
//         if (typeof i == "number"){
//             newArr.push(i)
//         }
//         else{
//             strArr.push(i)
//         }
//     }
//     return {
//         number: newArr,
//         str: strArr, 
//     };
// }

// console.log(x(num));

// // harflar takrorlanmagan bolsa true yoki false====================================================

// let str = "salom"

// const x = (a) => {
//     for (let i = 0; i < a.length; i++){
//         for (let b = i + 1; b < a.length; b++)
//         if (a[i] === a[b]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(x(str));
