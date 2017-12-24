class Drone{

  constructor(id, name){
    this.id = id;
    this.name = name;

    console.log(this.id, this.name);
  }

}

let drone = new Drone(123, 'Büşra');
console.log(drone.id, drone.name);

// console.log(typeof drone);
// console.log(drone instanceof Drone);
