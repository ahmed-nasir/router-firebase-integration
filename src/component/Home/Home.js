import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firbase.init';


const auth = getAuth(app)

const Home = () => {
    const [user]=useAuthState(auth)
    // console.log(user)
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-semibold my-5'>This is Home</h1>
            <p className='text-xl font-light'> Current user is: {user? user.displayName : "No user"}</p>
        </div>
    );
};

export default Home;