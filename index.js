// 1

let fruitList = [
  { apple: 4, Grapes: 3, Orange: 6 },
  { bannana: 4, Grapes: 3, Orange: 6 },
  { apple: 4, pineApple: 6, Guava: 1 },
];

// function countOfFruits (value){
//     let result = {}
//     for(let check=0; check<value.length; check++){
//         const objectValue = value[check]
//         for(const [key , value] of Object.entries(objectValue)){
//             if(!result.hasOwnProperty(key)){
//                 result[key] = value
//             }else{
//                 result[key] += value
//             }
//         }

//     }
//     return result;
// }

// console.log(countOfFruits(fruitList))

//? 2. we are given an array of objects where each object represetns a person with attribute such as their name and age.  our task is to create a function called groupObj that takes this array and a key as input

//? This function should group the objects based on the specified key and return the result as a javascript object

const arr = [
  { name: "vikas ", state: "punjab ", age: 22 },
  { name: "adhvik ", state: "Himachal ", age: 20 },
  { name: "rohit ", state: "Up ", age: 22 },
  { name: "Sumesh ", state: "Hr ", age: 20 },
  { name: "Vishal ", state: "Rajashtan ", age: 19 },
];

// function groupObj(arr, key) {
//   let result = {};
//   for (let i = 0; i < arr.length; i++) {
//     let obj = arr[i];
//     for (const [objKey, value] of Object.entries(obj)) {
//       console.log(i, objKey, key);
//       if (objKey == key) {
//         if (result.hasOwnProperty(value)) {
//           result[value] = [...result[value], arr[i]];
//         } else {
//           result[value] = [arr[i]];
//         }
//       }
//     }
//   }
//   return result;
// }

//? optemized  solution

// function groupObj(arr, key) {
//     return arr.reduce((result, obj) => {
//       const value = obj[key];
//       result[value] = result[value] || [];
//       result[value].push(obj);
//       return result;
//     }, {});
//   }

// console.log(groupObj(arr, "age"));

//? 3. let's Consider we  have a string now our question is reverse letter of that string (only letter not all string )

let str = "I love Javascript my Name is Vikas Singh";

// function reverseWordOfstring(val) {
//   let breakStr = val.split(" ");
//   let result = "";
//   for (let i = 0; i < breakStr.length; i++) {
//     let word = breakStr[i].split("").reverse().join("");
//     result = result + word + " ";
//   }

//   return result
// }

// console.log(reverseWordOfstring(str));

//! optemize Solution

// let reverse = str.split(" ").reverse().join(" ")
// console.log(reverse)
// let reverseWord = reverse.split("").reverse().join(" ")
// console.log(reverseWord)

//? 4 write a funciton and return that elements from the array whose sum is equal to target variable

const targetSeries = [8, 3, 11, 5, 4];
const target = 9;

// function sumOfElemets(targetArr , target){

//   for(const element of targetArr){
//     for(const ele of targetArr){
//     const val =  element + ele;
//       if(val === target ){
//         return [element , ele]
//       }
//     }
//   }
//   return null ;

// }

// console.log(sumOfElemets(targetSeries , target))

//? Find smallest animal name from the array

let animalList = [
  "ca=nhjbhhjt",
  "rabit",
  "hourse",
  "Goat",
  "cow",
  "Lion",
  "Tiger",
  "elephant",
];

// function getShortestAnimal() {
//   let result = animalList[0];
//   for (let presentAnimal = 1; presentAnimal < animalList.length; presentAnimal++) {
//     if (result.length > animalList[presentAnimal].length) {
//       result = animalList[presentAnimal];
//     }
//   }
//   return result;
// }

// console.log(getShortestAnimal());

//? return  palidron elements
const paliList = ["Radar", "hello", "level", "world", "deifind", "naman"];

// function findPalidroms(arr) {
//   let resultedArray = arr.filter((item) => {
//     const isPalidrom = item.toLowerCase().split("").reverse().join("") == item.toLowerCase()
//     console.log("isPalidrom" , isPalidrom)
//     if (isPalidrom) {
//       return isPalidrom;
//     }
//   });
//   return resultedArray
// }

// console.log(findPalidroms(paliList));

//? return new array of books

let friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and Peace", "Romeo and juliet"],
    age: 26,
  },
  {
    name: "Anna",
    books: ["The Loard of the Rings", "The Shining"],
    age: 18,
  },
];



// function getBooks (){
//   let resultedArray = []

//   for(let val of friends){
//     for(let i = 0 ; i< val.books.length; i++){
//       resultedArray.push(val.books[i])
//     }
//   }
//   return resultedArray

// }


// console.log(getBooks())




let author = "vikas singh Pathania i am creating conflict. Please resolve me."


