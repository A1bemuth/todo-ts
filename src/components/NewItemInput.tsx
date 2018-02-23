import * as React from 'react';
import { Button } from '@blueprintjs/core';
import './styles/NewItemInput.css';

interface Props {
    text: string;
    onTextChanged: (text: string) => void;
    onAddPressed: (text: string) => void;
}

export const NewItemInput: React.SFC<Partial<Props>> = (
    {
        text = '',
        onTextChanged,
        onAddPressed
    }) => (
        <div>
            <input
                type="text"
                className="pt-input"
                value={text}
                onInput={() => onTextChanged && onTextChanged(text)}
            />
            <Button
                icon="plus"
                className="pt-intent-success add-button"
                onClick={() => onAddPressed && onAddPressed(text)}
            />
        </div>
    );