import { Card, Button, Elevation } from '@blueprintjs/core';
import * as React from 'react';
import './styles/SomeComponent.css';

interface Props {

}

const SomeComponent = (props: Props) =>
    (
    <Card elevation={Elevation.TWO} className="card">
        <h5>Card heading</h5>
            <input type="text" className="pt-input center-me" />
            <Button icon="plus" className="pt-intent-success add-button"/>
    </Card>
    );

export default SomeComponent;