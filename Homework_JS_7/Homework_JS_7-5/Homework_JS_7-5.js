
function Client(id,name,surname,email,phone,order){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
    this.order=order;
}




const clients=[
    new Client(1,'Igarok','Voitenko',"voit@gmail.com",'0675432624',[{title:'Laptop',price:23500},{title:'Printer',price: 3000},{title:'Printer',price: 3000},{title:'Printer',price: 3000}]),
    new Client(2,'Ivan','Fedoriv',"fed@gmail.com",'0675568624',[{title:'Moto',price:23500},{title:'Printer',price: 3000},{title:'Printer',price: 3000}]),
    new Client(3,'Petro','Melnyk',"mel@gmail.com",'0675986645',[{title:'Auto',price:23500},{title:'Printer',price: 3000}]),
    new Client(4,'Myhailo','Boiko',"Boi@gmail.com",'0675432676',[{title:'Telefon',price:23500},{title:'Printer',price: 3000},{title:'Printer',price: 3000},{title:'Printer',price: 3000},{title:'Printer',price: 3000}]),
    new Client(5,'Nazar','Banderich',"Ban@gmail.com",'0675432941',[{title:'Book',price:23500},{title:'Printer',price: 3000}]),
    new Client(6,'Slavko','Dasiv',"Das@gmail.com",'0675432124',[{title:'Desktop',price:23500},{title:'Printer',price: 3000}]),
    new Client(7,'Fedir','Hrypta',"Hrypt@gmail.com",'0675437698',[{title:'PC',price:23500},{title:'Printer',price: 3000},{title:'Printer',price: 3000},{title:'Printer',price: 3000},{title:'Printer',price: 3000},{title:'Printer',price: 3000},{title:'Printer',price: 3000}]),
    new Client(8,'Sidorko','Pavlov',"Sid@gmail.com",'0675432546',[{title:'PlayerMP3',price:23500},{title:'Printer',price: 3000}]),
    new Client(9,'Mykola','Strogan',"STR@gmail.com",'06754326456',[{title:'Macbook',price:23500},{title:'Printer',price: 3000}]),
    new Client(10,'Bogdan','Mykhniovych',"Myk@gmail.com",'067543234',[{title:'Fleshka',price:23500},{title:'Printer',price: 3000}]),

]


console.log(clients.sort((a, b) => a.order.length - b.order.length));
