abstract class Vehicle {
     make: string;
     model: string;
     year: number;
     rented: boolean;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = false;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): void {
      if (this.rented) {
        console.log(`${this.make} ${this.model} ${this.year} is already rented.`);
      } else {
        console.log(`Renting ${this.make} ${this.model} ${this.year}.`);
        this.rented = true;
      }
    }
  
    return(): void {
      if (this.rented) {
        console.log(`Returning ${this.make} ${this.model} ${this.year}.`);
        this.rented = false;
      } else {
        console.log(`${this.make} ${this.model} ${this.year} has not been rented.`);
      }
    }
  }
  
  class Car extends Vehicle {
   private numDoors: number;
  
    constructor(make: string, model: string, year: number, numDoors: number) {
      super(make, model, year);
      this.numDoors = numDoors;
    }
  
    rentalRate(): number {
      return 50; 
    }
  
    getNumDoors(): number {
      return this.numDoors;
    }
  }
  
  class Truck extends Vehicle {
    private cargoCapacity: number;
  
    constructor(make: string, model: string, year: number, cargoCapacity: number) {
      super(make, model, year);
      this.cargoCapacity = cargoCapacity;
    }
  
    rentalRate(): number {
      return 100; 
    }
  
    getCargoCapacity(): number {
      return this.cargoCapacity;
    }
  }
  
  class Motorcycle extends Vehicle {
    private engineSize: number;
  
    constructor(make: string, model: string, year: number, engineSize: number) {
      super(make, model, year);
      this.engineSize = engineSize;
    }
  
    rentalRate(): number {
      return 25;
    }
  
    getEngineSize(): number {
      return this.engineSize;
    }
  }
  
  
  const car = new Car("Honda", "Civic", 2022, 4);
  console.log(car.getMake()); 
  console.log(car.getNumDoors()); 
  car.rent(); 
  console.log(car.isRented()); 
  car.rent(); 
  car.return(); 
  console.log(car.isRented()); 
  
  const truck = new Truck("Ford", "F-150", 2021, 2000);
  console.log(truck.getCargoCapacity()); 
  console.log(truck.rentalRate());
  
  const motorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2020, 883);
  console.log(motorcycle.getEngineSize()); 
  console.log(motorcycle.rentalRate());