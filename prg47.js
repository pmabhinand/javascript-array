//w a p to print pairs whose sum is 6 using binary search(remember array is sorted :me)

b=[2,3,4,5]

low=0
up=b.length-1
pairsum=6
ispresent=false

while(low<up){
    currsum=b[low]+b[up]
    if(currsum==pairsum){
        ispresent=true
        console.log(`${b[low]},${b[up]}`);
        low++
    }
    else if(currsum>pairsum){
        up--
    }
    else if(currsum<pairsum){
        low++
    }
}
!ispresent&&console.log('no such pair');


