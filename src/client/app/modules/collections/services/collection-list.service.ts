import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
// import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

import { Config } from "../../core/index";
import { Analytics, AnalyticsService } from "../../analytics/index";

import { CollectionList } from "../actions/index";

@Injectable()
export class CollectionListService extends Analytics {
    constructor(public analytics: AnalyticsService, private http: Http) {
        super(analytics);
        
        this.category = CollectionList.CATEGORY;
    }
    
    getCollections(): Observable<Array<any>> {
        return this.http.get(`${Config.IS_MOBILE_NATIVE() ? "/" : ""}assets/collections.json`)
            .map(res => res.json());
    }
}