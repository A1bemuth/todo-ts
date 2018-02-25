import { Card, Elevation } from '@blueprintjs/core';
import { NewItemInput } from './NewItemInput';
import * as React from 'react';
import './styles/TodoList.css';
import { ListItem } from './ListItem';

interface ItemProps {
    id: number;
    checked: boolean;
    text: string;
}

interface Props {
    newItemText: string;
    items: Array<ItemProps>;

    onTextChanged: (text: string) => void;
    onAddPressed: (text: string) => void;
    onItemUpdated: (i: ItemProps) => void;
}

export const TodoList: React.SFC<Props> = (
    {
        newItemText = '',
        items = [],
        onTextChanged,
        onAddPressed,
        onItemUpdated
    }) => (
        <Card elevation={Elevation.TWO} className="card">
            <h5>Card heading</h5>
            <NewItemInput
                text={newItemText}
                onAddPressed={onAddPressed}
                onTextChanged={onTextChanged}
            />
            {items.map(i => ListItem({ ...i, onItemChecked: (item: ItemProps) => onItemUpdated(item) }))}
        </Card>
    );