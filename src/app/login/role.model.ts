export class Role {
    private _name: string;
    private _id: number;
    private _description: string;


    constructor (
        id: number,
        name: string,
        description: string,
    ) 
    {   
        this.id = id;
        this.name = name;
        this.description = description;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name
    }

    set id(value) {
        this._id = value;
    }

    get id() {
        return this._id;
    }

    set description(value) {
        this._description = value;
    }

    get description() {
        return this._description;
    }



}