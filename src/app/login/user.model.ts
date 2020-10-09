import { Role } from "./role.model";

export class User {
    private _email: string;
    private _password: string;   
    private _firstName: string;
    private _lastName: string;
    private _role: Role;
    private _sessionId: string = "";

    constructor(
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        role: Role,
    ) 
    {
        this.email = email; 
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role; 
    }

    set firstName(value) {
        this._firstName = value;
    }

    get firstName() {
        return this._firstName
    }

    set lastName(value) {
        this._lastName = value;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    get lastName() {
        return this._lastName;
    }

    set email(value) {
        this._email = value;
    }

    get email() {
        return this._email;
    }

    set password(value) {
        this._password = btoa(value)
    }

    get password() {
        return this._password;
    }

    set role(value){
        this._role = value;
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