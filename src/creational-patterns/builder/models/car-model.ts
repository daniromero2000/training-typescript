export class Car {
    private seats: number;
    private engine: string;

    public setSeats(seats: number): void {
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