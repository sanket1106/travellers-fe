export class QuoteRequest {

    constructor(
        private title: string,
        private destination: string,
        private noOfDays: number,
        private noOfTravellers: number,
        private category: string,
        private specialRequest: string,
        private departureDate: Date,
        private arrivaldate: Date
    ){}
}