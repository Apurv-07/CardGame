min = 1;
max = 16;
r = 16; // how many numbers you want to extract
numbers=[];

for (let i = 0; i < r; i++) {
  do {
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    p = numbers.includes(n);
    if(!p){
      numbers.push(n);
      console.log(n)
    }
  }
  while(p);
}

console.log(numbers);