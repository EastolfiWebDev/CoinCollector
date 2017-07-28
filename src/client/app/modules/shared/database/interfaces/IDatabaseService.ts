export interface IDatabaseService {
    // constructor(private firebase: any);
    sync(path: string, onValueReceived: Function): void;
    
    addChild(path: string, data: any, callback?: Function): void;
    
    update(path: string, data: any, callback?: Function): void;
}