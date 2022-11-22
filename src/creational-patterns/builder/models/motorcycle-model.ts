export class Motorcycle {
    private seats: number;
    private engine: string;
  
    public setSeats(seats: number): void {
      if (seats > 2) {
        throw new Error("Motorcycle can not have more than 2 seats");
      }
      
      this.seats = seats;
    }
  
    public setEngine(engine: string): void {
      this.engine = engine;
    }
  
    public show(): void {
      console.log(`Seats: ${this.seats}`);
      console.log(`Engine: ${this.engine}`);
    }
  }