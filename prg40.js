//input=[4,5,6]
//output=[11,10,9]
//5+6 4+6 4+5
//15-4 15-5 15-6


input=[4,5,6]
console.log(input);

sum=0
output=[]
for(let num of input){
     sum=sum+num
}
for(let num of input){
    output.push(sum-num)

}
console.log(output);


//another method

o=[]
for(let n of input){
    o.unshift(n+5)
}
console.log(o);

console.log('-----------------------');








