import { Card, Button, Elevation } from '@blueprintjs/core';
import * as React from 'react';
import './styles/SomeComponent.css';

interface Props {

}

const SomeComponent = (props: Props) =>
    (
    <Card elevation={Elevation.TWO} className="card">
        <h5>Card heading</h5>
        <Button icon="plus">Press</Button>
    </Card>
    );

export default SomeComponent;