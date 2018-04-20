function ZavodCars(brand,type,model,wight,speed,color,numOfSeats,fuel,volumeTank,fuelConsum) {
		this.brand = brand;
		this.type = type;
		this.model = model;
		this.wight = wight;
		this.numOfSeats = numOfSeats;
		this.speed = speed;
		this.color = color;
		this.fuel = fuel;
		this.volumeTank = volumeTank;
		this.fuelConsum = fuelConsum;

		this.getInfo = function(){
			document.write('марка авто : '+ this.brand + "<br>");
			document.write('тип авто : '+ this.type + "<br>");
			document.write('модель авто : '+ this.model + "<br>");
			document.write('масса авто : '+ this.wight + "<br>");
			document.write('скорость авто : ' + this.speed + "<br>");
			document.write('кол-во мест : ' + this.numOfSeats + "<br>");
			document.write('цвет авто : ' + this.color + "<br>");
			document.write('вид топлива : ' + this.fuel + "<br>");
			document.write('объем бака : ' + this.volumeTank + "<br>");
			document.write('расход топлива : ' + this.fuelConsum + "<br>");
			document.write('на полном баке проедит : '+parseInt(this.volumeTank/this.fuelConsum *100));
		}

	}

	var audi = new ZavodCars('Audi','sedan','r8',5000,300+'km '+' / '+1 +'hr','white',5,'diesel',60,9);
	var lada = new ZavodCars('Lada', 'Hatchback', 'Kalina', 1000, 160+'km '+' / '+1 +'hr' , 'red', 4, 'benzin',60, 5);
	var opel = new 	ZavodCars('Opel', 'Miniven', 'Zafira', 1500, 240+'km '+' / '+1 +'hr',  'silver', 5,'benzin',60, 7);
	var renault = new ZavodCars('Renau', 'Sedan', 'Megan', 1300, 220+'km '+' / '+1 +'hr',  'blue', 4,'gaz',60, 9);
	var subaru = new ZavodCars('Subaru', 'Jeep', 'Forester', 2000, 260+'km '+' / '+1 +'hr', 'black', 5,'benzin',60, 6);
	var toyota = new ZavodCars('Toyota', 'Sedan', 'Corolla', 1800, 238+'km '+' / '+1 +'hr',  'silver', 4,'benzin',60, 8);

	var abc = Number(prompt('что вас интересует : (1)audi, (2)lada, (3)opel, (4)renault, (5)subaru, (6)toyota'));

	switch(abc){
		case 1:
		audi.getInfo();
		break;
		case 2:
		lada.getInfo();
		break;
		case 3:
		opel.getInfo();
		break;
		case 4:
		renault.getInfo();
		break;
		case 5:
		subaru.getInfo();
		break;
		case 6:
		toyota.getInfo();
		break;

	}