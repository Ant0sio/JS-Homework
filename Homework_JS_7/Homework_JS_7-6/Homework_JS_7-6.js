
function Car(model, firma, year, maxSpeed, Vmotor){

    this.model =model;
    this.firma=firma;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.Vmotor=Vmotor;
    this.drive=function drive(){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    };
    this.info=function (){
        for (const key in this) {
            console.log(key,this[key])
        }
    };
    this.increaseMaxSpeed=function newSpeeds (newSpeed){
       if (newSpeed>0) this.maxSpeed=this.maxSpeed+newSpeed

    }
    this.changeYear=function (year){
        if (year>1815) this.year = year

    };

    this.addDriver=function (driver){
        if (driver)this.driver=driver


    }






}

let car=new Car('340', 'BMW', 2005, 310, '4L');


car.drive();
car.info();
car.increaseMaxSpeed(140);

car.changeYear(2003);
    console.log(car);
car.addDriver();