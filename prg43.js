//w a p to print the common number in the given two arrays  ans:11,20,30
//p=[10,11,12,20,30]
//q=[11,20,25,30,33]

p=[10,11,12,20,30]
q=[11,20,25,30,33]
ispresent=false

for(i of p){
    for(j of q){
        if(i==j){
            ispresent=true
            console.log(i);
            break
        }
    }
}
!ispresent&&console.log('no common numbers');