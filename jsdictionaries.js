// let n = 1;
// while (n < 10) {
//     n++;
// }
// console.log(n);
// //10

// //Building a string with a loop, "The greedy version"
// let n = 5;
// while (n > 0) {
//      console.log('one for me');
//      n--;
// }

// //one for me
// //one for me
// //one for me
// //one for me

// //Conversation
// let n = 5;
// let conversation = '';
// while (n > 0) {
//     console.log('one for me');
//     conversation += "one for me\n";
//     n--;
// }
// //console.log(conversation);
// //one for me
// //one for me
// //one for me
// //one for me

// //Sharing the cookies
// let n = 5
// let conversation = '';
// while (n > 0) {
//     conversation += "one for me. ";
//     n--;
//     conversation += "one for you\n";
//     n--;
// }
// console.log(conversation);
// //one for me. one for you
// //one for me. one for you
// //one for me. one for you
// console.log(n);
// //-1

// let n = 5;
// let conversation = '';
// while (n > 0) {
//     console.log(`${n} cookie: me`);
//     conversation += "one for me. ";
//     n--;
//     console.log(`${n} cookie: you`);
//     conversation += "one for you\n";
//     n--;
// }

// //5 cookie: me
// //4 cookie: you
// //3 cookie: me
// //2 cookie: you
// //1 cookie: me
// //0 cookie: you

// //Checking odd number
// let n = 5;    
// let conversation = '';    
// while (n > 0) {    
//     if (n % 2 !== 0) {
//         console.log(`${n} cookie: me`);    
//         conversation += "one for me. ";    
//     } else {
//         console.log(`${n} cookie: you`);    
//         conversation += "one for you\n";    
//     }

//   n--;    
// }

// //5 cookie: me
// //4 cookie: you
// //3 cookie: me
// //2 cookie: you
// //1 cookie: me

// //Remove the console log
// let n = 5;    
// let conversation = '';    
// while (n > 0) {    
//   if (n % 2 !== 0) {
//     conversation += "one for me. ";    
//   } else {
//     conversation += "one for you\n";    
//   }

//   n--;    
// }    
// console.log(conversation);

// //one for me. one for you
// //one for me. one for you
// //one for me.

// //Check if current cookie is #1
// let n = 5;    
// let conversation = '';    
// while (n > 0) {    
//   if (n % 2 !== 0) {
//     conversation += "one for me. ";    
//     if (n === 1) {
//       conversation += "none for you.";    
//     }
//   } else {
//     conversation += "one for you\n";    
//     if (n === 1) {
//       conversation += "none for me.";    
//     }
//   }

//   n--;    
// }    
// console.log(conversation);

// //one for me. one for you
// //one for me. one for you
// //one for me. none for you.

//CHECKING 5 STAR RATINGS

//const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];

// const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];

// for (let i=0; i < ratings.length; i++) {
//     console.log(ratings[i]);
// }

// //Only print 5 star ratings
// const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
// for (let i=0; i<ratings.length; i++) {
    
//     if (ratings[i] === 5) {
    
//         console.log(ratings[i]);
//   }
// }

// //introduce additional variables
// const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
// const max = ratings.length;
// for (let i=0; i < max; i++) {
//     const stars = ratings[i]
//     if (stars === 5) {
    
//         console.log(stars);
//   }
// }

// //add count variable
// const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
// const max = ratings.length;
// let count = 0;
// for (let i=0; i<max; i++) {
//     const stars = ratings[i];
//     if (stars === 5) {
//        count++;
//        //console.log(stars);
//   }
// }
// if(count >= 6){
//     console.log('This is a featured product!');
// } else {
//     console.log('Sorry, no homepage for you');
// }

// // Summing Arrays
// console.log("The votes are in!");
// const c1Votes = [996, 139, 80, 591, 217, 817, 235, 846, 141, 60];
// const c2Votes = [746, 154, 366, 515, 523, 846, 590, 806, 446, 23];

// const max = c1Votes.length; // c2Votes.length is the same
// let c1Total = 0;
// let c2Total = 0;
// for (let i=0; i<max; i++) {
//     //console.log(c1Votes[i]);
//     c1Total += c1Votes[i];
//     //console.log(c2Votes[i]);
//     c2Total += c2Votes[i];
//   }
  
//   if(c1Total > c2Total){
//     console.log('Candidate 1 is the winner!');
//   }
//   else if (c2Total > c1Total){
//     console.log('Candidate 2 is the winner!');
//   }
//   else {
//       console.log('Time for a run-off. It was a tie!');
//   }

// //Searching
// const guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];
// const tables = [3, 1, 1, 2, 3, 2];

// function indexFor(guestToFind){
//     let foundIndex = -1
//     for (let i=0; i<guests.length; i++) {
//     if (guests[i] === guestToFind) {
//       foundIndex = i;
//       break;
//     }
//   }
//   return foundIndex;
// }

// //const guestToFind = 'Mustard'; // static variable in this example (const = static, let = dynamic)


// function printTableFor(guestToFind){
//     const index = indexFor(guestToFind);
//     const guestTable = tables[index];
//     if (index !== -1) {
//         console.log(`${guestToFind} sits at table ${guestTable}`);
//       } else {
//         console.log(`${guestToFind} is not on the guest list.`);
//       }
// }

// printTableFor('Mustard');
// printTableFor('Batman');


// const HEALTHY = 'GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC';
// let sample1 = 'GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC';
// let sample2 = 'GCTZGGTGGGZCACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTZGGGCAACCC';

// let sequence = [];
// for (let i = 0; i<sample2.length; i++) {
//     const letter = sample2[i];
//     if (letter === 'Z') {
//         sequence.push(HEALTHY[i]);
//     } 
//     else {
//         sequence.push(sample2[i]);
//     }
// }
// sequence = sequence.join('');

// console.log(sequence);


// const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];

// const max = ratings.length;
// const ratingsCount = {};

// for (let i=0; i<max; i++) {
//     const stars = ratings[i];
//     if(ratingsCount[stars]){
//         ratingsCount[stars]++
//     }
//     else{
//         ratingsCount[stars] = 1
//     }
//   }
//   console.log(ratingsCount);


// function add  (x, y) {
//     return x + y;
//   }

// const add = (x, y) => {
// return x + y;
// }
// const sub = (x, y) => {
// return x - y;
// };
// const mul = (x, y) => {
// return x * y;
// };
// const div = (x, y) => {
// return x / y;
// }

// const apply = (a, b, fn)=>{
//     const val = fn(a,b);
//     return val;
// }


// const r1 = apply(3,4, add);
// const r2 = apply(20,5, sub);
// const r3 = apply(4,7, mul);
// const r4 = apply(99,9, div);
// const result1 = add(2, 3); // 5
// const result2 = add(4, 5); // 9

// console.log(r1, " ", r2, " ", r3, " ", r4, " ");

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = arr[0];

// for (let i=1; i<arr.length; i++) {
//     let result = arr[0];
//     result = result + arr[i];	
// }

// const reduce = (a, b, fn)=>{
//     //     const val = fn(a,b);
//     //     return val;
// }
// console.log(result);

// const reduce = (arr, fn) => {
//     let result = arr[0];
    
//     for (let i=1; i< arr.length; i++) {
//         result = fn(result, arr[i]);
//       }
//       return result;
//     }

// const r5 = reduce(arr, add);
// console.log(r5);


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = [];
// for (let i=0; i<nums.length; i++) {
//     multNum = nums[i] * nums[i] * nums[i];
//     result.push(multNum);
// }
// console.log(result);


// const square = (z) => {
//     return z * z;
//   };

//   const cube = (z) => {
//     return z * z * z;
//   };

// const map = (arr, arr2, fn) => {
//     const result = [];
//     for (let i=0; i<arr.length; i++) {
//         arr2.push(fn(arr[i]));
//     }
//     return arr2;
// };
// let num2 = [];
// const r6 = map(nums, num2, square); // [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]
// const r7 = map(nums, num2, cube); // [ 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000 ]

// console.log(r6);
// console.log(r7);


const isEven = (val) => {
    return val % 2 === 0;
  };
  const isOdd = (val) => {
    return val % 2 === 1;
  };

  const filter = (arr, fn) => {
    const result = [];
    for (let i=0; i<arr.length; i++) {
      if (fn(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  };

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const resultOdd = filter(nums, isOdd);
  const resultEven = filter(nums, isEven);

console.log(resultOdd);
console.log(resultEven);
