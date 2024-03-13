import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiUser } from 'react-icons/fi';
import { CiGrid41 } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

// import Appeal from '../appeal/Appeal';
// import Ribbon from '../ribbon/Ribbon';
// import Profile from '../profile/Profile';

const BottomMenu = () => {
    const [activePage, setActivePage] = useState('ribbon');

    const handleButtonClick = (page) => {
        setActivePage(page);
    };

    const getIconStyle = (page) => {
        return activePage === page ? { color: '#203ed5' } : { color: '#808080' };
    };

    return (
        <div className="App">
            <div className="bottom-menu">
                <Link to='/'>    
                    <button
                        className="icon-button"
                        onClick={() => handleButtonClick('ribbon')}
                    >
                        <CiGrid41 style={getIconStyle('ribbon')} size={24} />
                    </button>
                </Link>

                <Link to="/appeal">
                    <button
                        className="icon-button"
                        onClick={() => handleButtonClick('appeal')}
                    >
                        <GoPlus style={getIconStyle('appeal')} size={30} />
                    </button>
                </Link>

                <Link to='/profile'>
                    <button
                        className="icon-button"
                        onClick={() => handleButtonClick('profile')}
                    >
                        <FiUser style={getIconStyle('profile')} size={24} />
                    </button>
                </Link>
            </div>
            {/* <div className="page-content">
                {activePage === 'feeds' && <Ribbon />}
                {activePage === 'add' && <Appeal />}
                {activePage === 'user' && <Profile />}
            </div> */}
        </div>
    );
};

export default BottomMenu;