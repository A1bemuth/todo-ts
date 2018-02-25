import * as React from 'react';
import { Card, Text } from '@blueprintjs/core';
import './styles/ListItem.css';

interface Item {
    id: number;
    text: string;
    checked: boolean;
}

interface Props extends Item {
    onItemChecked: (i: Item) => void;
}

export const ListItem: React.SFC<Props> = (
    { id, text, checked, onItemChecked }
) => (
        <Card
            key={id}
            className="item-card"
            interactive={true}
            onClick={(e) => onItemChecked({ id, text, checked: !checked })}
        >
            <Text className={checked ? 'item-card-checked' : 'item-card-unchecked'}>{text}</Text>
            {/* <Switch label={text} defaultChecked={checked} className="item-switch"/> */}
        </Card>
    );