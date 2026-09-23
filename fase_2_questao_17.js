const arr = [10, 15, 22, 34, 45, 60];
let processado = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    const metade = arr[i] / 2;
    processado += metade;
  }
}

console.log(processado);
