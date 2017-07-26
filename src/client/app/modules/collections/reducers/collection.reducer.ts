import { ICollectionState, collectionInitialState } from '../states/index';
import { CollectionList } from '../actions/index';

export function reducer(
    state: ICollectionState = collectionInitialState,
    // could support multiple state actions via union type here
    // ie: NameList.Actions | Other.Actions
    // the seed's example just has one set of actions: NameList.Actions
    action: CollectionList.Actions
): ICollectionState {
    switch (action.type) {
        case CollectionList.ActionTypes.INITIALIZED:
            return (<any>Object).assign({}, state, {
                collections: action.payload
            });

        case CollectionList.ActionTypes.COLLECTION_ADDED:
            return (<any>Object).assign({}, state, {
                collections: [...state.collections, action.payload]
            });

        default:
            return state;
  }
}
