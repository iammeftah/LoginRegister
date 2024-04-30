// Register.js
import React, { useState } from 'react';

const Register = ({ toggleForm }) => {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        country: '',
        type: '',
        interests: ''
    });

    const { username, firstName, lastName, country, type, interests } = formData;

    const handleChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleTypeChange = (value) => {
        setFormData({ ...formData, type: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData); // This is where you can handle form submission
    };

    return (
        <div className='bg-gray-800 px-10 py-10 rounded-tl-2xl rounded-bl-2xl text-lg'>
            <h1 className='text-5xl font-semibold text-white'>Register</h1>
            <p className='mt-4 font-medium text-lg text-gray-400'>Please enter your details.</p>

            <form onSubmit={handleSubmit} className='mt-6 grid grid-cols-2 gap-4'>
                <div className='mb-2'>
                    <label className='text-white'>First Name:</label>
                    <input
                        className='outline-none w-full border-2 border-gray-700 rounded-md p-2 bg-gray-900 text-white hover:border-violet-500 focus:border-violet-500 focus:outline-none'
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                    />
                </div>
                <div className='mb-2'>
                    <label className='text-white'>Last Name:</label>
                    <input
                        className='outline-none w-full border-2 border-gray-700 rounded-md p-2 bg-gray-900 text-white hover:border-violet-500 focus:border-violet-500 focus:outline-none'
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                    />
                </div>
                <div className='mb-2'>
                    <label className='text-white'>Username:</label>
                    <input
                        className='outline-none w-full border-2 border-gray-700 rounded-md p-2 bg-gray-900 text-white hover:border-violet-500 focus:border-violet-500 focus:outline-none'
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        placeholder="Username"
                        required
                    />
                </div>
                <div className='mb-2'>
                    <label className='text-white'>Country:</label>
                    <select
                        className='outline-none w-full border-2 border-gray-700 rounded-md p-2 bg-gray-900 text-white hover:border-violet-500 focus:border-violet-500 focus:outline-none'
                        name="country"
                        value={country}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select your country</option>
                        <option value="morocco">Morocco</option>
                        <option value="france">France</option>
                        <option value="uk">UK</option>
                        <option value="spain">Spain</option>
                        <option value="italy">Italy</option>
                        <option value="usa">USA</option>
                        <option value="canada">Canada</option>
                    </select>
                </div>
                <div className='mb-2 col-span-2'>
                    <label className='text-white'>Type:</label>
                    <div className='flex mt-1'>
                        <div className='flex-1 mb-2 mr-2'>
                            <button
                                className={`w-full border-2 border-gray-700 rounded-md py-2 px-3 focus:outline-none ${type === 'seller' ? 'bg-violet-600 text-white' : 'bg-gray-900 text-white'} hover:border-violet-500`}
                                onClick={() => handleTypeChange('seller')}
                                type="button"
                                style={{ transition: 'background-color 0.3s, color 0.3s' }}
                            >
                                Seller
                            </button>
                        </div>
                        <div className='flex-1 mb-2 ml-2'>
                            <button
                                className={`w-full border-2 border-gray-700 rounded-md py-2 px-3 focus:outline-none ${type === 'buyer' ? 'bg-violet-600 text-white' : 'bg-gray-900 text-white'} hover:border-violet-500`}
                                onClick={() => handleTypeChange('buyer')}
                                type="button"
                                style={{ transition: 'background-color 0.3s, color 0.3s' }}
                            >
                                Buyer
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mb-2 col-span-2'>
                    <label className='text-white'>Centre interet:</label>
                    <input
                        className='outline-none w-full border-2 border-gray-700 rounded-md p-2 bg-gray-900 text-white hover:border-violet-500 focus:border-violet-500 focus:outline-none'
                        type="text"
                        name="interests"
                        value={interests}
                        onChange={handleChange}
                        placeholder="Centre interet"
                        required
                    />
                </div>
                <div className='col-span-2'>
                    <button className='mt-4 hover:bg-violet-500 active:scale-95 active:duration-75 hover:text-white hover:bg-violet-700 transition-all py-2 px-2 bg-violet-600 text-white font-bold rounded-md w-full' type='submit'>Register</button>
                    <button className='mt-4 w-full text-white flex items-center justify-center gap-2 rounded-md py-2 font-semibold hover:bg-gray-700 active:scale-95 active:duration-75 transition-all' onClick={toggleForm} type="button">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Register;
