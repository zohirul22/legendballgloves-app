import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="left-side">
                <h2>PRO 44</h2>
            </div>
            <div className="right-side">
                <button className='btn'>Reset</button>
            </div>
        </div>
    );
};

export default Header;