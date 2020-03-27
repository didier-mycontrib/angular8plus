export interface GeoDataNode {
        name : string;
        fullName() :string;
        children(): GeoDataNode[];
}

export class Country implements GeoDataNode{
    constructor(public code:string=null,
                public name:string=null,
                public capital_city : string =null,
                public population :number=null,
                public area : number = null /* km 2 */,
                public regions : Region[] = null /* km 2 */
                ) {}
    fullName(){
            return this.name + " - " + this.capital_city;
    }
    children(){
            return this.regions;
    }
}

export class Continent implements GeoDataNode{
    constructor(public num:number=null,
                public name:string=null,
                public countries : Country[] = []){
        }
   fullName(){
         return this.name ;
   }
   children(){
         return this.countries;
   }
}

export class County /*departement*/ implements GeoDataNode {
    constructor(public num:string=null,
                public name:string=null,
                public main_city : string = null){
        }
        fullName(){
                return this.name + " - " + this.main_city;
        }
        children(){
                return null;
        }
}

export class Region  implements GeoDataNode {
    constructor(public num:number=null,
                public name:string=null,
                public counties : County[] = []){
        }
    fullName(){
                return this.name ;
          }
    children(){
                return this.counties;
          }
}