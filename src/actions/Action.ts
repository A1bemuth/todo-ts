import { ActionType } from './AppActions';

export interface Action<T> {
    type: ActionType;
    payload: T;
}

export function actionType<TActionType extends ActionType, TPayload>(type: TActionType) {
    return class implements Action<TPayload> {
        static readonly Type = type;
        
        type: TActionType;
        payload: TPayload;

        constructor(payload: TPayload) {
            return {
                payload,
                type
            };
        }
    };
}

export function actionFactory<
    TPayload,
    TAction extends Action<TPayload>
    >(c: new (p: TPayload) => TAction) {
    return (payload: TPayload) => new c(payload);
}