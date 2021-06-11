const ages = [ 21, 18, 42, 40, 64, 63, 34];


const maxAge = ages.reduce((maxValue, currentItem) => {
    if (maxValue > currentItem) {
        return maxValue
    }
    else {
        return currentItem;
    }
});

console.log(maxAge);
