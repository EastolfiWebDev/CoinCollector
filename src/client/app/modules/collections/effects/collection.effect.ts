import { Injectable } from "@angular/core";

import { Store, Action } from "@ngrx/store";
import { Effect, Actions } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";

import { CollectionListService } from "../services/collection-list.service";
import { CollectionList } from "../actions/index";

@Injectable()
export class CollectionEffects {
    @Effect() init$: Observable<Action> = 
        this.actions$
            .ofType(CollectionList.ActionTypes.INIT)
            .startWith(new CollectionList.InitAction)
            .switchMap(() => this.collectionListService.getCollections())
            .map(payload => {
                let collections = payload;
                
                return new CollectionList.InitializedAction(collections);
            })
            .catch(() => Observable.of(new CollectionList.InitFailedAction()));
    
    @Effect() add$: Observable<Action> = 
        this.actions$
            .ofType(CollectionList.ActionTypes.ADD)
            .switchMap(action => this.collectionListService.addCollection(action.payload))
            .map(collection => {
                this.collectionListService.track(CollectionList.ActionTypes.COLLECTION_ADDED, { label: collection.name });
                
                return new CollectionList.CollectionAddedAction(collection);
            });
            
    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private collectionListService: CollectionListService
    ) {
        
    }
}