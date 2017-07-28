import { IDatabaseService } from "../interfaces/IDatabaseService";

export class DatabaseService implements IDatabaseService {
    sync(path: string, onValueReceived: Function): void { }
    
    addChild(path: string, data: any, callback?: Function): void { }
    
    update(path: string, data: any, callback?: Function): void { }
}