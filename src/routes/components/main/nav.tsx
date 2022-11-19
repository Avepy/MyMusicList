import React from 'react';
import { ContainerProps } from '../../../types/ContainerProps';

export default function Nav(props: ContainerProps): JSX.Element {
    return (
        <div className="nav">
            {props.children}
        </div>
    );
}