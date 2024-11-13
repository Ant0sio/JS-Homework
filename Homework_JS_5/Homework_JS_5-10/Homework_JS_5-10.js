let minArrayValue=(numbers)=>{
     let min=numbers[0];
     for (let i=1;i<numbers.length;i++){
         let number=numbers[i];
         if (number<min){
             min=number
         }

     }

     return min;
 }
 console.log(minArrayValue([21,32,12,11,7,43,5]));