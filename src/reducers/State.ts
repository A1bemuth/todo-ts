export interface NewItemInput { 
    text: string;
}

export interface Item {
    id: number;
    text: string;
    isChecked: boolean;
}

export interface State {
    newItemInput: NewItemInput;
    items: Array<Item>;
}

export const initialState = {
    newItemInput: {
        text: ''
    },
    items: [
    ]
};