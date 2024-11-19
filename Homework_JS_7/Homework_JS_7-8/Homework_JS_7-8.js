class Popelyshka{
    constructor(name,age,footSize) {
        this.name=name;
        this.age=age;
        this.footSize=footSize
    }}



class Prince{

    constructor(name,age,tyfelkaSize) {
        this.name=name;
        this.age=age;
        this.tyfelkaSize=tyfelkaSize


    }


}


const popelyshku=[
    new Popelyshka('Mia',15,30),
    new Popelyshka('Olla',15,32),
    new Popelyshka('Mary',15,33),
    new Popelyshka('Miky',15,34),
    new Popelyshka('Sara',15,39),
    new Popelyshka('Vara',15,43),
    new Popelyshka('Jena',15,29),
    new Popelyshka('Klory',15,31),
    new Popelyshka('Sem',15,28),
    new Popelyshka('Rich',15,36),
]

const prince=new prince('Ger',31,28)


const popelyshka=popelyshku.find(popelyshka=>popelyshka.footSize===prince.tyfelkaSize);


prince.wife = popelyshka
