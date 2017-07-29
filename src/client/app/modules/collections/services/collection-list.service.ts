import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { DatabaseService } from "../../shared/database/firebase/database.service";

import { Config } from "../../core/index";
import { Analytics, AnalyticsService } from "../../analytics/index";

import { CollectionList } from "../actions/index";
import { Collection } from "../models/collection";

@Injectable()
export class CollectionListService extends Analytics {
    constructor(public analytics: AnalyticsService, private http: Http, private databaseService: DatabaseService) {
        super(analytics);
        
        this.category = CollectionList.CATEGORY;
    }
    
    getCollections(): Observable<Array<any>> {
        return new Observable(observer => {
            this.databaseService.sync("collections", (collections) => {
                let colls = [];

                Object.keys(collections).map(key => {
                    let c = collections[key];
                    
                    c["_id"] = key;
                    
                    colls.push(c);
                });
                
                observer.next(colls);
                observer.complete();
            });
        });
    }
    
    addCollection(collection: Collection): Observable<Collection> {
        return new Observable(observer => {
            this.databaseService.addChild("collections", collection, () => {
                observer.next(collection);
                observer.complete();
            });
        });
    }
}