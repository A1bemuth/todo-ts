export interface NewItemInput { 
    text: string;
}

export interface Item {
    id: number;
    text: string;
    checked: boolean;
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
        {id: 1, text: 'Todo #1', checked: false},
        {id: 2, text: 'Todo #2', checked: true},
        {id: 3, text: 'Todo #3', checked: false}
    ]
};