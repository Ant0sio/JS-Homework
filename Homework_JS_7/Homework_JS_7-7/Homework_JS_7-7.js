
    class Car {

        constructor(model, firma, year, maxSpeed, Vmotor) {
            this.model = model;
            this.firma = firma;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.Vmotor = Vmotor;
        }

        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };

        info() {
            for (const key in this) {
                console.log(key, this[key])
            }
        };

        increaseMaxSpeed(newSpeed) {
            if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed

        }

        changeYear = function (year) {
            if (year > 1815) this.year = year

        };

        addDriver = function (driver) {
            if (driver) this.driver = driver
        }
    }

    const car=new Car('340', 'BMW', 2005, 310, '4L');
console.log(car)

    car.drive();
    car.info();
    car.increaseMaxSpeed(140);

    car.changeYear(2003);
        console.log(car)
    car.addDriver({})
