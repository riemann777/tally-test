function itFib(n) {

    var lastFibNos = [];

    lastFibNos.push(0);
    lastFibNos.push(1);

    for (var i=0; i<n; i++) { 
        
        lastFibNos.push(lastFibNos[0] + lastFibNos[1]);
        lastFibNos.shift(); 
    }

    return lastFibNos[0];

}

console.log(itFib(0))
console.log(itFib(1))
console.log(itFib(2))
// console.log(itFib(3))
// console.log(itFib(4))