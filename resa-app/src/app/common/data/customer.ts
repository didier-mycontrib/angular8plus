export interface ResLogin {
     username :string ;
     status :boolean;
     message :string;
     token? : any;
}

/*
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
*/
//----------- temp with values (dev mode) ------
export class Address {
    constructor(
        public num :string ="5",
        public street :string ="rue xy",
        public zipCode :string ="75000",
        public town :string ="Paris",
        public country :string ="France"
    ){
    }
}

export class Customer {
    constructor(
        public id :string | null =null,
        public firstName :string ="axelle",
        public lastName :string ="Aire",
        public username :string ="?",
        public birthDay :string ="1974-08-23",
        public email :string ="axelle.aire@vroomVroom.fr",
        public mobilePhoneNumber :string ="0601020304",
        public address : Address = new Address()
    ){
    }
}

export class CustomerAccount {
    constructor(
        public username :string ="axelleAire",
        public password :string ="pwd"
    ){
    }
}