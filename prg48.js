//nested array

a=[[10,23],[34,56],[2,4],[57,89],[7,9]]

//print all numbers less than 10   ans=2,4,7,9

for(let p of a){
    for(let q of p){
        if(q<10){
            console.log(q);
        }
    }
}