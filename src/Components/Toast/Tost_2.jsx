import React from 'react';
import { AiFillWarning } from 'react-icons/ai';

const ToastDuplicate = ({showToast2,handleShowToast2}) => {
    
    return (
     <div style={{display: `${showToast2 ? 'block': 'none'}`}}>
         <div className='h-[100vh] w-[100%] fixed  flex justify-center items-center   top-0 left-0 right-0 '>
          <div className='bg-white rounded flex lg:w-[600px] lg:h-[250px] lg:py-1 lg:px-1 py-32 px-32 justify-center items-center flex-col shadow-2xl'>
          <div className="flex justify-center item-center space-y-2">
          <AiFillWarning className=' text-4xl text-red-600'></AiFillWarning>
          </div>
            <h1 className='text-xl text-black  text-center'>Sorry! you can't select one course more than 1 times</h1>
            <button className='px-8 py-2 bg-blue-600 text-white my-2' onClick={()=>{
                handleShowToast2(false)
            }}>Ok</button>
           
        </div>
      </div>
     </div>
    );
}

export default ToastDuplicate;
