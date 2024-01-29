//w a p to print pairs whose sum is 6
//b=[2,3,4,5]


b=[2,3,4,5]
pairsum=6
ispresent=false

for(i=0;i<b.length;i++){
    for(j=i+1;j<b.length;j++){
        currsum=b[i]+b[j]
        if(currsum==pairsum){
            ispresent=true
            console.log(`(${b[i]},${b[j]})`);
        }
    }
}

!ispresent&&console.log('no such pair');




