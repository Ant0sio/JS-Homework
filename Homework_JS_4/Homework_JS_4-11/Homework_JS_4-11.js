function cash(moneys){
    let box=0;
    for (const money of moneys) {
        box=box+money
    }

    return box;
}
console.log(cash([3,5,7,8,12,14]))