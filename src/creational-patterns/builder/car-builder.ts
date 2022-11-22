import { Builder } from "./interfaces/builder";
import { Car } from "./models/car-model";

export class CarBuilder implements Builder {
    private car: Car;
  
    constructor() {
      this.car = new Car();
    }
  
    public setSeats(seats: number): this {
      this.car.setSeats(seats);
      return this;
    }
  
    public setEngine(engine: string): this {
      this.car.setEngine(engine);
      return this;
    }
  
    public getResult(): Car {
      return this.car;
    }
  }