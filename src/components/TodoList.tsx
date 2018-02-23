import { Card, Elevation } from '@blueprintjs/core';
import { NewItemInput } from './NewItemInput';
import * as React from 'react';
import './styles/TodoList.css';
import { ListItem } from './ListItem';

interface ItemProps {
    checked: boolean;
    text: string;
}

interface Props {
    newItemText?: string;
    items?: Array<ItemProps>;
}

export const TodoList: React.SFC<Props> = (
    {
        newItemText = '',
        items = []
    }) => (
        <Card elevation={Elevation.TWO} className="card">
            <h5>Card heading</h5>
            <NewItemInput text={newItemText} />
            {items.map(i => ListItem(i))}
        </Card>
    );