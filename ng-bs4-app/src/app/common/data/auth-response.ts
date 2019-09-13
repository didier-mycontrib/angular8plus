export class AuthResponse {
    username : string ;//checked
    status : boolean ; //true or false
    message : string ; //error message or ...
    token : string ;//jwt (to store or send-back as Bearer token)
    roles : string ;//checked
}