import Bird from "./IBird"

class Sparrow implements Bird {
  fly (): void {
    console.log('Flying')
  }
  makeSound (): void {
    console.log('Chirp Chirp')
  }
}

export default Sparrow