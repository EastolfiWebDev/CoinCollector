export class Collection {
    name: string;
    coins: Array<any> = [];
    _id: string;
    
    constructor(name: string) {
        this.name = name;
    }
}