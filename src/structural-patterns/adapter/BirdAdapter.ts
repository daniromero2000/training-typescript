import IToyDuck from "./IToyDuck"
import Bird from "./IBird"

class BirdAdapter implements IToyDuck {

  private bird: Bird

  constructor (bird: Bird) {
    this.bird = bird
  }

  squeak (): void {
    this.bird.makeSound()
  }

}

export default BirdAdapter