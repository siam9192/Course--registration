import React from 'react';

const Cart = ({selectedCourse,creditHour,remainingHour}) => {
    
    return (
        <div className='bg-white p-5 h-fit rounded'>
            <h1 className='text-xl text-blue-600 font-medium py-2 border-b-[3px] border-gray-300'>Credit Hour Remaining {remainingHour} hr</h1>
            <h1 className="text-xl font-medium text-black py-2">
            Course Name
            </h1>
            <div className='border-b-[3px] border-gray-300 py-2'>
               {
                selectedCourse.map((course,index)=>{
                 return <p key={index}>{index+1} {course.title}</p>
                   
                })
               }
            </div>
            <div className='text-xl '> 
                <h2>Total Credit Hour : {creditHour}</h2>
            </div>
        </div>
    );
}

export default Cart;
