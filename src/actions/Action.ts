import { ActionType } from './AppActions';

export interface Action<T> {
    type: ActionType;
    payload: T;
}

export function actionType<TActionType extends ActionType, TPayload>() {
    return class implements Action<TPayload> {
        type: TActionType;
        payload: TPayload;
        
        constructor(payload: TPayload) {
            this.payload = payload;
        }
    };
}

export function actionFactory<
    TPayload,
    TAction extends Action<TPayload>
    >(c: new (p: TPayload) => TAction) {
    return function (payload: TPayload) {
        return new c(payload);
    };
}