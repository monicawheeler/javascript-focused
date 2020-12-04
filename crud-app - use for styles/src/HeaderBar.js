import React from 'react';
import User from './User';
import './styles/layout/header-bar.css';

function HeaderBar() {
    return (
        <header className="header-bar">
            <div className="header-bar__inner">
                <User />
            </div>
        </header>
    )
}

export default HeaderBar;