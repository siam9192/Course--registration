import { FiBookOpen } from 'react-icons/fi';

const CourseCard = ({course,handleSelectedCourse}) => {
//   console.log(handleSelectedCourse)
    

    return (
        <div className="p-4 bg-white rounded-lg">
           <img src={course.image} alt="" className="w-full" /> 
          <div className="space-y-3">
          <h1 className="text-[18px] mt-2 font-medium text-black">
            {course.title}
           </h1>
           <p>{course.description}</p>
          </div>
          <div className="flex justify-between items-center py-2">
            <h3 className="">$ Price: {course.price}</h3>

    <FiBookOpen ></FiBookOpen>
    <h3>Credit : {course.credit}hr</h3>

          </div>
          <button className='w-full text-center font-medium  text-white py-2 rounded bg-[#2F80ED]' onClick={()=>{
            handleSelectedCourse(course)
          }}>Select</button>
        </div>
    );
}

export default CourseCard;
