//linear search
//var arr=[10,11,12,3,2,4,56]
   //check whether 2 is present or not

   var a=[10,11,12,3,2,4,56]

  searchitem=2
  ispresent=false
   for(let num of a){
    if(num==searchitem){
         ispresent=true
         console.log(num);
         break
      }
          
   }
   console.log(ispresent?'present':'not present');