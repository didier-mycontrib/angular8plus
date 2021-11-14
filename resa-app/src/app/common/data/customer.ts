export class Address {
    constructor(
        public num :string ="",
        public street :string ="",
        public zipCode :string ="",
        public town :string ="",
        public country :string ="France"
    ){
    }
}

export class Customer {
    constructor(
        public id :string ="",
        public firstName :string ="",
        public lastName :string ="",
        public username :string ="",
        public birthDay :string ="",
        public email :string ="",
        public mobilePhoneNumber :string ="",
        public address : Address = new Address()
    ){
    }
}

export class CustomerAccount {
    constructor(
        public username :string ="",
        public password :string =""
    ){
    }
}