import * as React from 'react';
import { Card, Switch } from '@blueprintjs/core';
import './styles/ListItem.css';

interface Props {
    checked: boolean;
    text: string;
}

export const ListItem: React.SFC<Partial<Props>> = (
    { text = '', checked = false }
) => (
        <Card className="item-card" interactive={true}>
            <Switch label={text} defaultChecked={checked} className="item-switch"/>
        </Card>
    );