import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firbase.init';


const auth = getAuth(app)

const Products = () => {
    const [user]=useAuthState(auth)
    return (
        <div className='text-xl font-semibold text-center pt-5'>
            <h2>Who is there?</h2>
            <h3>{user ? user.displayName : 'bhooot! ;) '}</h3>
        </div>
    );
};

export default Products;