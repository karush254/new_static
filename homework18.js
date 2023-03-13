class Flower {
  static allcount = 0;
  constructor(name,height,count) {
      this.name = name,
      this.height = height,
      this.count = `${count}Hat`,
      Flower.allcount += count
  }
};

class Tulip extends Flower {};

class Rose extends Flower {};

class Lily extends Flower {};

class Unforgettable extends Flower {};

class Peony extends Flower {};

class Calla extends Flower {};

let buketMarti8 = [new Tulip("Tulip","0,5m",5),new Rose("Rose","1m",13),new Lily("Lily","1m",7)];
let buketAprili7 = [new Unforgettable("Unforgettable","0,1m",1000),new Peony("Peony","0,3m",4),new Rose("Rose","1m",13)]
let buketbirthday = [new Calla("Calla","0,4m",5),new Lily("Lily","1m",10),new Peony("Peony","0,3m",4),new Tulip("Tulip","0,5m",5)]
console.log(buketMarti8);
console.log(buketAprili7);
console.log(buketbirthday);
console.log(Flower.allcount);


//Task 2
class Vehicle {
  publicMaxSpeed = 0;
  public4x4 = false;
  publicRightHandlebar = false;
  _mator = 2;
  _door = 2;
  #npatak = "Texasharjvelu hamar:";
  #varord = true;
  #petrolCount (value) {
      if(value < 20) {return console.log("low petrol")};
      if(value > 20) {return console.log("Normal petrol");}

  }
  set mator (value) {
      if(value <= 1) throw new Error ("Chka aytpisi tuyl mator:");
      this._mator = value
  };
  get mator() {
      return this._mator
  }
  set door (value) {
      if(value < 2) throw new Error ("Chka mek dur unecox meqena:");
      else if(value > 5) throw new Error ("Chka 5ic avel dur unecox meqena:")
      this._door = value
  };
  get door() {
      return this._door
  }
  constructor(name,passengerCount) {
      this.name = name,
      this.passengerCount = passengerCount
  }
};

class Bus extends Vehicle {
};

let b = new Bus("Hyundai","22");
b.mator = 1.5;
b.door = 3;
b.publicMaxSpeed = 180;
console.log(b);

class SuperCar extends Vehicle {
  constructor (name,passengerCount,color,price) {
      super(name,passengerCount);
      this.color = color,
      this.price = price
  }
};
let s = new SuperCar("Lamborgini","2","yellow","500000$");
s.publicMaxSpeed = 380;
s.publicRightHandlebar = true;
s.door = 2;
s.mator = 7.7;
console.log(s);

class Jeep extends Vehicle {
  constructor (name,passengerCount,price,isgoodjeep) {
      super(name,passengerCount);
      this.price = price,
      this.isgoodjeep = isgoodjeep,
      this.wheelCount = true
  }
};
let j = new Jeep("Mercedes","5","250000",true);
j.public4x4 = true,
j.publicMaxSpeed = 320;
j.door = 4;
j.mator = 5.5;
console.log(j);

//////// task 4
// let str = "khggvyuhjb hjbjhbhjb "
// String.prototype.Upper = function () {
//     let strArray = this.split(" ");

//     strArray = strArray.map((str)=> {
//         return str.charAt(0).toUpperCase() + str.substring(1);
//     })
//     return strArray.join(" ")
// }

// console.log(str.Upper());
// console.log("");
/////////////////3.1
// class ArramSum extends Array {
//   sum() {
//     return this.filter((val) => typeof val === "number").reduce(
//       (acc, val) => acc + val,
//       0
//     );
//   }
// }

// const arr = new ArramSum(1, 2, "three", 4, "five",5,6,147,"Hello","World","gggg");
// console.log(arr); 
// console.log(arr.sum());

