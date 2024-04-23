import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const Navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem('authToken')
        localStorage.removeItem('userData')
        Navigate('/signin') // this for , when the user log-out then direct navigate to the "signin" page
        console.log("Log-Out successfully")
    }

    const userData = JSON.parse(localStorage.getItem('userData') || '{}')
    console.log('userData',userData)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
            <button id='logout-link' onClick={logOut} className='underline text-xl top-64 right-96 absolute'>SignOut</button>
         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <div className="flex flex-col h-[10vh] justify-evenly text-xl">
        <h3 className='flex justify-center'>Name:<p className='text-blue-500'>{userData.name}</p></h3>
        <h3 className='flex justify-center'>Email:<p className='text-blue-500'>{userData.email}</p></h3>
      </div>
    </div>
  );
}

export default Dashboard;