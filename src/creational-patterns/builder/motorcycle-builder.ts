import { Builder } from "./interfaces/builder";
import { Motorcycle } from "./models/motorcycle-model";

export class MotorcycleBuilder implements Builder {
    private motorcycle: Motorcycle;
  
    constructor() {
      this.motorcycle = new Motorcycle();
    }
  
    public setSeats(seats: number): this {
      this.motorcycle.setSeats(seats);
      return this;
    }
  
    public setEngine(engine: string): this {
      this.motorcycle.setEngine(engine);
      return this;
    }
  
    public getResult(): Motorcycle {
      return this.motorcycle;
    }
  }