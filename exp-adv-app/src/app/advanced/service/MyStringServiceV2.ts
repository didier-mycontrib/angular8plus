import { MyStringService } from './MyStringService';

export class MyStringServiceV2 extends MyStringService {
    public withPrefix(s:string):string{
        return "##"+s;
    }
    public withSuffix(s:string):string{
        return s+"##";
    }
}