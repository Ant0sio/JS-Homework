
function cloner(obj){
    if (obj){
        let functions=[];

        for (const key in obj) {

            if (typeof obj[key]==='function')

            {
                const functionClone=obj[key].bind({})
                functions.push({functionClone,key})
            }
            console.log(typeof obj[key]);}
        console.log(functions);

        const cloneObj=JSON.parse(JSON.stringify(obj));
        console.log(cloneObj);
        for (const func of functions) {
            cloneOb1j[func.key]=func.functionClone
        }
        console.log(cloneObj);
        return cloneObj
    }
    throw new Error('!!!!')
}



let user=  {id: 123,

    name:'asda',

    greeting(){},

    foo(){}}
