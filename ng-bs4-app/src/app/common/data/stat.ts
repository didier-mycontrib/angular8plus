export class Stat {
    public _id : string ; //auto_incr or ...
    public year : number;
    public month : number;//may be null
    public value : number;
}

//si stats annuelle (month=null)
//si stats mensuelle (month = 1 ..12 )