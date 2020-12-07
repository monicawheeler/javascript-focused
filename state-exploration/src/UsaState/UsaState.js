import React from 'react';
import StateImage from './StateImage';

function UsaState() {
    return (
        <ul>
            {/* TODO: map through array and pass image from there */}
            <StateImage image="🇺🇸" />
            <StateImage image="👋" />
            <StateImage image="💪" />
            <StateImage image="🍔" />
            <StateImage image="🍟" />
        </ul>
    )
}

export default UsaState;