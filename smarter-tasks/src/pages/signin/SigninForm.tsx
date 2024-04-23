import React, { useState } from 'react';
import { API_ENDPOINT } from '../../config/constants';

const SigninForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
        const response = await fetch(`${API_ENDPOINT}/users/sign_in`,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({ email, password})
        })

        if(!response.ok){
            throw new Error('Sign-in failed')
        }

        console.log("Sign-in Successful")

        // Extract the response body as JSON data
        const data = await response.json();

        // After successful signin, first we will save the token in localStorage
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userData', JSON.stringify(data.user)); 
        //we are converting the user object (which contains user information), into a JSON string using JSON.stringify(). Then, we are using localStorage.setItem() to store the JSON string in local storage with the key name userData.

        const userData = JSON.parse(localStorage.getItem('userData'));

        console.log(userData.id); // "1"
        console.log(userData.name); // "Avishek Jana"
        console.log(userData.email); // "avishek@example.com"
        console.log(userData.password);
    } catch(error) {
        console.error("Sign-in failed", error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Password:</label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign In</button>
    </form>
  );
};

export default SigninForm;