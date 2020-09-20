export class UserInfo {
    private _email: string;
    private _password: string   
    private _firstName: string;
    private _lastName: string;
    private _role: number;
    private _sessionId: string = "";

    constructor(
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        role: number,
    ) 
    {
        this._email = email; 
        this._password = password;
        this._firstName = firstName;
        this._lastName = lastName;
        this._role = role; 
    }

    set firstname(value) {
        this._firstName = value;
    }

    get firstname() {
        return this._firstName
    }

    set lastname(value) {
        this._lastName = value;
    }

    get lastname() {
        return this._lastName;
    }

    set email(value) {
        this._email = value;
    }

    get email() {
        return this._email;
    }

    set password(value) {
        this.password = btoa(value)
    }

    get password() {
        return this._password;
    }

    set role(value){
;    this.role = value;
    }

    get role() {
        return this._role;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get sessionId() {
        return this._sessionId;
    }   
}