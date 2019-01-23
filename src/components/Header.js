import React from 'react';
import {Link} from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamers
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All streams
                </Link>
                <Link to="/" className="item">
                    <GoogleAuth/>
                </Link>
            </div>
        </div>
    )
};

export default Header;