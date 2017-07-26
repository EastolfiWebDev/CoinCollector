import { Observable } from 'rxjs/Observable';

export interface ICollectionState {
    collections: Array<any>;
}

export const collectionInitialState: ICollectionState = {
    collections: <Array<any>>[]
}

// selects specific slice from sample state
export function getCollections(state$: Observable<ICollectionState>) {
    return state$.select(state => state.collections);
}
