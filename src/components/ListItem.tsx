import * as React from 'react';
import { Card, Checkbox } from '@blueprintjs/core';
import './styles/ListItem.css';

interface Props {
    checked: boolean;
    text: string;
}

export const ListItem: React.SFC<Partial<Props>> = (
    { text = '', checked = false }
) => (
        <Card className="item-card">
            <Checkbox label={text} defaultChecked={checked} className="item-checkbox"/>
        </Card>
    );