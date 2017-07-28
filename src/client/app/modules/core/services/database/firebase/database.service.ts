import { NgZone, Injectable } from "@angular/core";
var firebasePlugin = require("firebase");

import { Config } from "../../../../core/index";
import { IDatabaseService } from "../../../../shared/database/interfaces/IDatabaseService";

@Injectable()
export class WebDatabaseService implements IDatabaseService {
    private database: any;
    private onSync: Function;
    private userID: string;
    
    constructor(private ngZone: NgZone) {
        console.debug("Constructing Web Database Service");
        // Add types
        firebasePlugin.firebase.initializeApp(Config.ENVIRONMENT().FIREBASE);
        this.database = firebasePlugin.firebase.database();
    }
    
    sync(path: string, onValueReceived: Function): void {
        this.database.ref(path)
            .on("value", (snapshot: any) => {
                this.ngZone.run(() => {
                    onValueReceived(snapshot.val());
                });
            });
    }
    
    addChild(path: string, data: any, callback?: Function): void {
        this.database.ref(path)
            .push(data, (error: any) => {
                if (callback && !error) {
                    this.ngZone.run(() => {
                        callback();
                    })
                }
            });
    }
    
    update(path: string, data: any, callback?: Function): void {
        // todo
    }
}