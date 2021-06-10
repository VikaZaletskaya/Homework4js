// //Задача 1
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// Задача 2 
let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arr1.length; i++) {
    let value = arr1[i];
    if (value > -10 && value < -3) {
      console.log(value);
    }
  }


//Задача 3

let arr2 = [23, 24, 25, 26, 27, 28, 29, 30, 31, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
let result = 0;
for (let i = 0; i < arr2.length; i++) {
  result += arr2[i];
}
console.log(arr2);
console.log(result);


//задача 4

let arr3 = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < arr3.length; i++) {
  let num = arr3[i];
  let char = num[0];
  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}

//Задача 5 
let arr4 =['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for (let i = 0; i < arr4.length; i++) {
     if (i === 5 || i === 6) { 
        console.log('%c' + arr4[i], 'font-weight: bold;');  
     }
     else {
        console.log (arr4[i]);
     }
}


//Задача 6

let numbers = [1, 2, 3, 4, 5];
numbers [numbers.length] = 6;
console.log(numbers);

//Задача 7

let arr5 =[]; 
let value;

while (true) {
    value = prompt('Введите число');
    
    if (value === '') {
        break;
    }
    arr5.push(value);
}
console.log(arr5);
{
arr5.sort ();
console.log(arr5);
}

