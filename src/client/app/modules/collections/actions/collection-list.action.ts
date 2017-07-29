import { Action } from '@ngrx/store';

import { type } from '../../core/utils/index';

import { Collection } from "../models/collection";

export namespace CollectionList {
    export const CATEGORY: string = "CollectionList";
    
    export interface ICollectionListActions {
        INIT: string,
        INITIALIZED: string,
        INIT_FAILED: string,
        ADD: string,
        COLLECTION_ADDED: string
    }
    
    export const ActionTypes: ICollectionListActions = {
        INIT: type(`${CATEGORY} Init`),
        INITIALIZED: type(`${CATEGORY} Initialized`),
        INIT_FAILED: type(`${CATEGORY} Init Failed`),
        ADD: type(`${CATEGORY} Add`),
        COLLECTION_ADDED: type(`${CATEGORY} Added`)
    }
    
    export class InitAction implements Action {
        type = ActionTypes.INIT;
        payload: string = null;
    }
    
    export class InitializedAction implements Action {
        type = ActionTypes.INITIALIZED;
  
        constructor(public payload: Array<string>) { }
    }
  
    export class InitFailedAction implements Action {
        type = ActionTypes.INIT_FAILED;
        payload: string = null;
    }
  
    export class AddAction implements Action {
        type = ActionTypes.ADD;
  
        constructor(public payload: Collection) { }
    }
  
    export class CollectionAddedAction implements Action {
        type = ActionTypes.COLLECTION_ADDED;
  
        constructor(public payload: Collection) { }
    }
    
    export type Actions =
        InitAction |
        InitializedAction |
        InitFailedAction |
        AddAction |
        CollectionAddedAction;
}