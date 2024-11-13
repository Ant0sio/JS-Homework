let Array=(ArrayItems)=>{

     document.write(`<ul>`);
     for (const arrayItem of ArrayItems){
         document.write(`<li>${arrayItem}</li>`);

     }
     document.write(`</ul>`);



 }
 Array([123,444,656,777,'Music','Rock',true,false]);