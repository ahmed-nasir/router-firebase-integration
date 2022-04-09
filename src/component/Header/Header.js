import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div>

            <div className='flex justify-center '>
                <div className=''>
                    <nav className=' text-2xl font-semibold '>
                        <Link to='/' className='pr-4 hover:text-orange-400'>Home</Link>
                        <Link to='/products' className='pr-4 hover:text-orange-400'>Products</Link>
                        <Link to='/Orders' className='pr-4 hover:text-orange-400'>Orders</Link>
                        <Link to='/register' className='pr-4 hover:text-orange-400'>Register</Link>
                        <span>{user?.displayName && user?.displayName}</span>
                        {
                            user?.uid
                                ?
                                <button onClick={handleSignOut}>Sign out</button>
                                :
                                <Link to='/login' className='hover:text-orange-400'>LogIn</Link>
                        }
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;