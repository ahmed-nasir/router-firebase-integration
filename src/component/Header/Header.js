import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firbase.init';


const auth = getAuth(app)

const Header = () => {
    const[user]=useAuthState(auth);
    return (
        <div>

            <div className='flex justify-center '>
                <div className=''>
                    <nav className=' text-2xl font-semibold '>
                        <Link to='/' className='pr-4 hover:text-orange-400'>Home</Link>
                        <Link to='/products' className='pr-4 hover:text-orange-400'>Products</Link>
                        <Link to='/orders' className='pr-4 hover:text-orange-400'>Orders</Link>
                        <Link to='/register' className='pr-4 hover:text-orange-400'>Register</Link>
                        <span className='pr-4'>{user?.displayName && user?.displayName}</span>
                        {
                            user?.uid
                                ?
                                <button onClick={()=>signOut(auth)} className=''>Sign out</button>
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