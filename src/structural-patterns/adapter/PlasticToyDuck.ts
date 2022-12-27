import IToyDuck from "./IToyDuck"

class PlasticToyDuck implements IToyDuck {
  squeak (): void {
    console.log('Squeak')
  }
}

export default PlasticToyDuck