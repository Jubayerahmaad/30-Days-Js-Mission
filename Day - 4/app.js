// find() & reduce()

const arrItem = [1, 2 , 3, 4, 5];

let findItem = arrItem.find((item) => item == 4);
let calculateItem = arrItem.reduce(function(prevItem, currentItem){
    return prevItem + currentItem;
});

console.log(calculateItem);

console.log(findItem);