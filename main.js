let oddEvenNumbers = [12, 13, 24, 25, 30, 31, 32, 33, 34, 35, 36];
    let toq = [];
    let juft = [];

    for (let index = 0; index < oddEvenNumbers.length; index++) {
    if (oddEvenNumbers[index] % 2 === 0) {
        juft.push(oddEvenNumbers[index]); // Juft sonlarni "juft" massiviga qo'shamiz
    } else {
        toq.push(oddEvenNumbers[index]); // Toq sonlarni "toq" massiviga qo'shamiz
    }
    }


for (let index = 0; index < oddEvenNumbers.length; index++) {
  if (oddEvenNumbers[index] % 2 === 0) {
    juft.push(oddEvenNumbers[index]); // Juft sonlarni "juft" massiviga qo'shamiz
  } else {
    toq.push(oddEvenNumbers[index]); // Toq sonlarni "toq" massiviga qo'shamiz
  }
}

console.log("Toq sonlar:", toq);
console.log("Juft sonlar:", juft);
