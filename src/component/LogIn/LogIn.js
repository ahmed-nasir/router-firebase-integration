import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const LogIn = () => {
    const {signInWithGoogle}= useFirebase()
    return (
        <div>
            
            <div className='text-4xl font-semibold pt-10 text-center'>
                <h1>Please login</h1>
            </div>
            <div className='max-w-full   flex justify-center py-10'>
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />

                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                            <Link to='/' className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </Link>
                        </div>
                    </form>
                        <div className=''>
                            <button onClick={()=>signInWithGoogle()}  className=' text-white p-1 rounded-md bg-blue-500'>Google sign in</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;