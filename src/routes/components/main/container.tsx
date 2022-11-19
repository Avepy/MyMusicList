import React from 'react';
import { ContainerProps } from '../../../types/ContainerProps';

export default function Container(props: ContainerProps): JSX.Element {
    return (
        <div className="main">
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}