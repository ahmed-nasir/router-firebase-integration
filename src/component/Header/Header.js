import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <nav className='text-orange-400 text-lg'>
                <Link to='/' className='pr-4'>Home</Link>
                <Link to='/login'>LogIn</Link>
            </nav>
        </div>
    );
};

export default Header;