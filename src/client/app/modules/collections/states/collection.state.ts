import { Observable } from 'rxjs/Observable';

import { Collection } from "../models/collection";

export interface ICollectionState {
    collections: Array<Collection>;
}

export const collectionInitialState: ICollectionState = {
    collections: <Array<Collection>>[]
}

// selects specific slice from sample state
export function getCollections(state$: Observable<ICollectionState>) {
    return state$.select(state => state.collections);
}
