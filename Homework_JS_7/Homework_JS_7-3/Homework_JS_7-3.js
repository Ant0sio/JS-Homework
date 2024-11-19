    function User(id,name,surname,email,phone)
    {  this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;

    }


    let users=  [


        new User(1,'Slaavik','Radevich','radev@gmail.com','+380974323764'),
        new User(2,'Petro','Yatsuk','erererer@gmail.com','+380783421673'),
        new User(3,'Igor','Varvarun','Varvar@gmail.com','+380687648332'),
        new User(4,'Slaavik','Radevich','radev@gmail.com','+380974323764'),
        new User(5,'Slaavik','Radevich','radev@gmail.com','+380974323764'),
        new User(6,'Slaavik','Radevich','radev@gmail.com','+380974323764'),
        new User(7,'Slaavik','Radevich','radev@gmail.com','+380974323764'),
        new User(8,'Slaavik','Radevich','radev@gmail.com','+380974323764'),
        new User(9,'Slaavik','Radevich','radev@gmail.com','+380974323764'),
        new User(10,'Slaavik','Radevich','radev@gmail.com','+380974323764')

    ]

    console.log(users);

const filter=users.filter((user)=>user.id%2===0)
    console.log(filter);

    console.log(filter.sort((a, b) => b.id - a.id));