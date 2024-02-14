import React from 'react';
import netflixlogo from '../../images/icons/Netflix_Logo_PMS (3) copy.png'
const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 w-full z-[100] absolute bg-black-600 text-white-300'>
        <div className='text-white-600 text-3xl cursor-pointer'><img src={netflixlogo} className='w-40' alt='netflex logo' />
        </div>
        {/* <div className='text-blue-100 text-lg  cursor-pointer'>Home </div>
        <div className='text-blue-100 text-lg cursor-pointer'>TVShows </div>
        <div className='text-blue-100 text-lg cursor-pointer'>Movies </div>
        <div className='text-blue-100 text-lg  cursor-pointer'> Latest </div>
        <div className='text-blue-100 text-lg  cursor-pointer'> mylists </div>
        <div className='text-blue-100 text-lg  cursor-pointer'> Browseby Language </div>
        
         */}
         <div className='text-red-400 flex justify-between'>
         <div className=' text-sm text-white mr-2 py-2'>UNLIMITED TV SHOWS & MOVIES</div>
            <div>
            <button className='text-white bg-blue-600 cursor-pointer px-6 py-2 mr-4'>Sign In</button>
            </div>
            <div className='border-red-700'><button className='bg-red-600 rounded cursor-pointer px-6 py-2 text-white '>Sign Up</button></div>
        </div>

      
    </div>
  );
}

export default Header;
