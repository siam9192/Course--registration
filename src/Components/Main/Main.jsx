import React, { useEffect, useState } from 'react';
import CourseCard from './course_card';
import Cart from '../Cart/cart';
import Toast from '../Toast/Toast';

const Main = ({handleSelectedCourse,selectedCourse,creditHour,remainingHour}) => {
    const [courses,setCourse] = useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res=> res.json())
        .then(data => setCourse(data))
    },[])

    return (
        <div className='max-w-[1300px] mx-auto  gap-8 py-10 relative flex'>
   <Toast></Toast>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 w-[70%] gap-5'>

 
    courses.map(course=>{
    return<CourseCard course= {course} handleSelectedCourse = {handleSelectedCourse} key = {course.id}></CourseCard>
    })
 }
        </div>
        <Cart selectedCourse = {selectedCourse} creditHour = {creditHour} remainingHour = {remainingHour}></Cart>
   

        </div>
        
    );
}

export default Main;
