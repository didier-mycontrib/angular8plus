//export interface MyStringService{ ...}
//not working for dependency inject because 
//interface not exist at runtime for (... instanceof ...)
//--> error 'MyStringService' only refers to a type, but is being used as a value here.


export abstract class MyStringService{
    public abstract withPrefix(s:string):string;
    public abstract withSuffix(s:string):string;
}