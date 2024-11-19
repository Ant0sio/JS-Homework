Array.prototype.myForEach=function (callback){
    const yourArray=this;
    for (const item of yourArray) {
        callback(item)

    }
}
let x =  [11 , 22 , 33]
x.myForEach((x)=>console.log(x));


Array.prototype.myFilter=function (predicate){
    const arr=[];
    for (const item of this){
        if (predicate(item)){

            arr.push(item);
        }
    }
    return arr
}


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const result=users.myFilter((user)=>user.status);

console.log(result);
