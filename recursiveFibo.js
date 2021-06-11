const fibonacci = (num) => {
    if(num <= 1) return 1;
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

for(let i=0; i<1000; i++) {
    console.log(fibonacci(i));
}