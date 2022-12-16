// 1. arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул. 43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11
// 2. Array доторх тоонуудын нийлбэрийг ол.
// 3. Хамгийн их тоог ол.
// 4. Хамгийн бага тоог ол.
// 5. Array - ийн эхэнд дурын 1 тоог нэм.
// 6. Array - ийн төгсгөлд дурын 1 тоог нэм.


// let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11], sum = 0;
// for (i = 0 ; i < arrayOfNumbers.length; i++){
//     sum += arrayOfNumbers[i]
// }
// console.log(sum);

//3 

let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11],  b = arrayOfNumbers[0];
for (i = 0 ; i < arrayOfNumbers.length; i ++){
    if (b <  arrayOfNumbers[i]){
        b = arrayOfNumbers[i]
    } 
}
console.log(b);

