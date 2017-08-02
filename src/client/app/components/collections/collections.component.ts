import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { IAppState, getCollections } from "../../modules/ngrx/index";

@Component({
    moduleId: module.id,
    selector: "cc-collections",
    templateUrl: "collections.component.html",
    styleUrls: ["collections.component.css"]
})
export class CollectionsComponent implements OnInit {
    public collections$: Observable<any>;
    
    constructor(private store: Store<IAppState>/*, public routerext: RouterExtensions*/) {
        
    }
    
    ngOnInit() {
        this.collections$ = this.store.let(getCollections);
    }
}