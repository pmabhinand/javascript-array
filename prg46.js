//find common number using binary search

p=[10,11,12,20,30]
q=[11,20,25,30,33]

a=0
b=0
ispresent=false

while(a<p.length && b<q.length){

    if(p[a]==q[b]){
        ispresent=true
        console.log(p[a]);
        a++
        b++
    }
    else if(p[a]<q[b]){
        a++
    }
    else if(p[a]>q[b]){
        b++
    }
}

!ispresent&&console.log('no common numbers');