let foobar=(users)=>{
     for (const user of users){
         document.write(`<div>${user.id} ${user.name}  ${user.age}</div>`);
     }


 }
 foobar([{id:1,name:'Ivan',age:32},{id:2,name:'Slavik',age:30},{id:3,name:'Petro',age:37},{id:4,name:'Igor',age:31},{id:5,name:'Mykola',age:29}]);