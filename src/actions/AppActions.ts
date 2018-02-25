import { Item } from './../reducers/State';
import { actionType, actionFactory } from './Action';

export const enum ActionType {
    NEW_ITEM_INPUT_UPDATED = 'NEW_ITEM_INPUT_UPDATED',
    ITEM_UPDATED = 'ITEM_UPDATED',
    ITEM_DELETED = 'ITEM_DELETED',
    NEW_ITEM = 'NEW_ITEM'
}

export class ItemUpdated extends actionType<
    ActionType.ITEM_UPDATED,
    Item>
    (ActionType.ITEM_UPDATED) { }
export const itemUpdated = actionFactory(ItemUpdated);

export class ItemDeleted extends actionType<
    ActionType.ITEM_DELETED,
    { id: number }>
    (ActionType.ITEM_DELETED) { }
export const itemDeleted = actionFactory(ItemDeleted);

export class NewItem extends actionType<
    ActionType.NEW_ITEM,
    { text: string }>
    (ActionType.NEW_ITEM) { }
export const newItem = actionFactory(NewItem);

export class NewItemInputUpdated extends actionType<
    ActionType.NEW_ITEM_INPUT_UPDATED,
    { text: string }>
    (ActionType.NEW_ITEM_INPUT_UPDATED) { }
export const newItemInputUpdated = actionFactory(NewItemInputUpdated);

export type AppActions =
    | NewItemInputUpdated
    | ItemUpdated
    | ItemDeleted
    | NewItem;