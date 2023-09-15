import React from 'react';
import { AiFillWarning } from 'react-icons/ai';

const Toast = ({showToast,setShowToast}) => {
    
    return (
     <div style={{display: `${showToast? 'block': 'none'}`}}>
         <div className='h-[100vh] w-[100%] fixed  flex justify-center items-center   top-0 left-0 right-0'>
          <div className='bg-white py-24 px-40 rounded flex justify-center items-center flex-col shadow-2xl'>
          <div className="flex justify-center item-center space-y-2">
          <AiFillWarning className=' text-4xl text-red-600'></AiFillWarning>
          </div>
            <h1 className='text-xl text-black  text-center'>Sorry! Course hour limit exist</h1>
            <button className='px-8 py-2 bg-blue-600 text-white my-2' onClick={()=>{
                setShowToast(false)
            }}>Ok</button>
           
        </div>
      </div>
     </div>
    );
}

export default Toast;
