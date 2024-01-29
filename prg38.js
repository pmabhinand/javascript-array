/* expense=[12000,23000,40000,34000,55000,24000,10000,14000]
   1)find the lowest expence
   find the highest expence
   find the total expence
   */

   expense=[12000,23000,40000,34000,55000,24000,10000,14000]
   lowest=expense[0]

   for(let num of expense){
       if(num<=lowest){
         lowest=num
       }
   }
   console.log(lowest);





   highest=0
   for(let num of expense){
      if(num>=highest){
         highest=num
      }
   }
   console.log(highest);





   sum=0
   for(let num of expense){
      sum=sum+num
   }
   console.log('total expense is :',sum);



  