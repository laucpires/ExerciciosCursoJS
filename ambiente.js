let num = [5, 8, 4];
num.sort();

num[3] = 6;

num.push(7);

// for (let pos in num) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`);
// }

let pos = num.indexOf(8);
console.log(`A posição ${pos} tem o valor ${num[pos]}`);