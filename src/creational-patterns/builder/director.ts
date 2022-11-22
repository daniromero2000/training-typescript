import { CarBuilder } from "../builder/car-builder";
import { Car } from "./models/car-model";
import { MotorcycleBuilder } from "../builder/motorcycle-builder";
import { Motorcycle } from "./models/motorcycle-model";


export class Director {
    public buildFerrari(): Car {
      return new CarBuilder().setSeats(2).setEngine("V-12").getResult();
    }
  
    public buildToyota(): Car {
      return new CarBuilder().setSeats(7).setEngine("V-6").getResult();
    }
  
    public buildHonda(): Motorcycle {
      return new MotorcycleBuilder().setSeats(2).setEngine("V-4").getResult();
    }
  
    public buildYamaha(): Motorcycle {
      return new MotorcycleBuilder().setSeats(1).setEngine("V-2").getResult();
    }
  }