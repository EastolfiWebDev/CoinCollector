import { NgZone, Injectable } from "@angular/core";
var firebasePlugin = require("nativescript-plugin-firebase");

import { LogService } from "../../../../../app/modules/core/index";
import { IDatabaseService } from "../../../../../app/modules/shared/database/interfaces/IDatabaseService";

@Injectable()
export class NativeDatabaseService implements IDatabaseService {
    private database: any;
    private onSync: Function;
    private userID: string;
    
    constructor(private ngZone: NgZone, private log: LogService) {
        this.log.debug("Constructing Native Database Service");
        
        this.database = firebasePlugin;
        
        this.database.init({
            persist: true
        }).then((instance: any) => {
            this.log.debug("Firebase init success");
        }, (error: any) => {
            this.log.debug("Firebase init error: " + error);
        });
    }
    
    sync(path: string, onValueReceived: Function): void {
        const fnc = (result: any) => {
            this.ngZone.run(() => {
                onValueReceived(result.error || result.value);
            });
        };
        this.database.addValueEventListener(fnc, path);
    }
    
    addChild(path: string, data: any, callback?: Function): void {
        this.database.push(path, data)
            .then((result: any) => {
                if (callback) {
                    this.ngZone.run(() => {
                        callback(result.key);
                    });
                }
            });
    }
    
    update(path: string, data: any, callback?: Function): void {
        // todo
    }
}