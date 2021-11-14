export class Reservation {
    constructor(
        public id :string ="",
        public datetime :string ="",
        public nbPlaces :number =1,
        public customer :string ="",
        public session :string =""
    ){
    }
}