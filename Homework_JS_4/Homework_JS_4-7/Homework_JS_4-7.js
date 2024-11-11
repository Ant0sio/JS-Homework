function foobar(text,number){
    document.write(`<ul>`)
    for (i=0;i<number;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write  (`</ul>`)
}

foobar('Okten-very nice',6)