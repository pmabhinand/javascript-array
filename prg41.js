//w a p to print the duplicated element from the given array
//a=[10,20,30,20,30,40,50,60,10]

a=[10,20,30,20,30,40,50,60,10]

ispresent=false

for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if (a[i]==a[j]){
            ispresent=true
            console.log(a[i]);
            break
        }
    }
}
if(ispresent==false){
     console.log('no duplication');
}

/*  ispresent&&console.log('no duplication'); - using truthy operator */





