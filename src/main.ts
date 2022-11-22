// import { bulbasaur, pokemons } from './bases/02-objects';
// import { name, age } from './bases/01-types';
// import { charmander } from './bases/03-classes';
// import { charmander } from './bases/04-injection';
// import { charmander } from './bases/05-decorators';
//import { charmander } from './bases/06-decorators2';
import { CarBuilder } from './creational-patterns/builder/car-builder';
import { Director } from './creational-patterns/builder/director';
import { MotorcycleBuilder } from './creational-patterns/builder/motorcycle-builder';

// using the director
const director = new Director();
director.buildFerrari();
director.buildToyota();

director.buildHonda();
director.buildYamaha();

// using directly the builders
const car = new CarBuilder()
  .setSeats(2)
  .setEngine("V-12")
  .getResult();

const motorcycle = new MotorcycleBuilder()
  .setSeats(2)
  .setEngine("V-4")
  .getResult();

  console.log("Car", car);
  console.log("Motorcycle", motorcycle);
