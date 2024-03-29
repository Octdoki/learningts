
import React from 'react';
import {  Address, Restaurant } from './model/restaurant';

interface OwnProps {
    info : Restaurant,
    changeAddr(address:Address):void
}

const Store:React.FC<OwnProps> = ({info}) => {
    return (
        <div>
            {info.name}
        </div>
    );
};

export default Store;