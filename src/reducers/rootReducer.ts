import { AppActions, ActionType } from './../actions/AppActions';
import { State, NewItemInput, initialState, Item } from './State';

export function rootReducer(state: State = initialState, action: AppActions) {
    return {
        newItemInput: newItemInputReducer(state.newItemInput, action),
        items: itemsReducer(state.items, action)
    };
}

function newItemInputReducer(state: NewItemInput, action: AppActions): NewItemInput {
    switch (action.type) {
        case ActionType.NEW_ITEM_INPUT_UPDATED:
            return { text: action.payload.text };
        case ActionType.NEW_ITEM:
            return { text: '' };
        default:
            return Object.assign({}, state);
    }
}
    
function itemsReducer(items: Array<Item>, action: AppActions): Array<Item> {
    let newItems = items.slice();
    switch (action.type) {
        case ActionType.ITEM_UPDATED:
            const updatedItem = newItems.find(i => i.id === action.payload.id);
            Object.assign(updatedItem, action.payload);
            return newItems;
        case ActionType.ITEM_DELETED:
            return newItems.filter(i => i.id !== action.payload.id);
        case ActionType.NEW_ITEM:
            const newId = Math.max(...newItems.map(i => i.id)) + 1;
            newItems.push({ id: newId, text: action.payload.text, checked: false });
            return newItems;
        default:
            return newItems;
    }
}