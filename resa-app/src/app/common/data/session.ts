export class Session {
    constructor(
        public id :string ="",
        public title :string ="",
        public date :string ="",
        public startTime :string ="",
        public unitPrice :number =0,
        public description :string ="",
        public maxNbPlaces :number =0,
    ){
    }
}