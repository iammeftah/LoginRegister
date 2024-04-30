import { Glow, GlowCapture } from '@codaworks/react-glow';
import * as React from 'react'; 

export default function Form({ toggleForm }) {
    return (
        
                    <div className='bg-gray-800 px-20 py-20 rounded-3xl '>
                        <h1 className='text-5xl font-semibold text-white'>Welcome Back</h1>
                        <p className='mt-6 font-medium text-lg text-gray-400 mt' >Welcome back! Please enter your details.</p>

                        <div className='mt-8'>
                        
                        
                            <div>
                                <label className='text-lg font-medium text-white'>Email:</label>
                                <input 
                                    className='outline-none w-full border-2 border-gray-700 rounded-md p-2 mt-1 bg-gray-900 text-white transition-all duration-300 hover:border-violet-500 focus:border-violet-500 focus:outline-none'
                                    placeholder='Enter your email'
                                    type="text"
                                    required
                                />
                            </div>
                            

                        <div>
                            <label className='text-lg font-medium text-white'>Password:</label>
                            <input 
                                className='outline-none w-full border-2 border-gray-700 rounded-md p-2 mt-1 bg-gray-900 text-white transition-all duration-300 hover:border-violet-500 focus:border-violet-500 focus:outline-none'
                                placeholder='Enter your password'
                                type="password"
                                required
                            />
                        </div>


                            <div className='mt-8 flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <input 
                                        id='remember'
                                        type="checkbox"
                                        className='form-checkbox h-5 w-5 text-violet-500'
                                    />
                                    <label className='ml-2 font-medium text-base text-gray-400' htmlFor="remember">Remember for 30 days</label>
                                </div>
                                <button className='font-medium text-base text-violet-500' >Forgot Password</button>
                            </div>

                            <div className='mt-8 flex flex-col gap-y-4'>
                                <button className='hover:bg-violet-500 active:scale-95 active:duration-75 hover:text-white hover:bg-violet-700 transition-all py-2 bg-violet-600 text-white text-lg font-bold rounded-md'>Sign in</button>
                                <button className='text-white flex items-center justify-center gap-2 rounded-md py-2 font-semibold hover:bg-gray-700 active:scale-95 active:duration-75 transition-all' onClick={toggleForm}>Register</button>

                                <button className='text-white flex items-center justify-center gap-2 rounded-md py-2 font-semibold hover:bg-gray-700 active:scale-95 active:duration-75 transition-all'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                    Sign in with Google
                                </button>
                            </div>

                        </div>
                    </div>
                
    )
}
