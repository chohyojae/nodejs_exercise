let a = {};
for(let i=0; i<10; i++) {
    a[i] = i; 
}

a.length = 10;

var sum = 0;
for(let i=0; i<a.length; i++) {
    sum += a[i];
}

console.log(sum);


