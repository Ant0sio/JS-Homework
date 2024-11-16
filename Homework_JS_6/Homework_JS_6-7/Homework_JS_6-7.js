
    function  sortNums(array,direction){
if (direction==='ascending') {return array.sort((a, b) => a - b);}
        if (direction === 'descending') {
            return array.sort((a, b) => b - a)}}
    console.log(sortNums([3, 11, 21],'ascending'));
