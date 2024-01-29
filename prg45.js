//binary search
//check whether 12  is present in given array

var a=[10,11,12,3,4,2]

a.sort((num1,num2)=>num1-num2)  

searchitem=12
low=0
up=a.length-1
ispresent=false

while(low<=up){
    mid=Math.floor((low+up)/2)
    if(a[mid]==searchitem){
        ispresent=true
        console.log('present');
        break
    }
    else if(a[mid]>searchitem){
        up=mid-1
    }
    else if(a[mid]<searchitem){
        low=mid+1
    }
}
!ispresent&&console.log('not present');


//b=[63,6,13,21,2,36,81,97,47]  , searchitem=13