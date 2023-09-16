import { FiBookOpen } from 'react-icons/fi';
import PropTypes from 'prop-types'
const CourseCard = ({course,handleSelectedCourse}) => {


    return (
        <div className="p-4 bg-white rounded-lg relative h-[410px]">
           <img src={course.image} alt="" className="w-full" /> 
          <div className="space-y-3">
          <h1 className="text-[18px] mt-2 font-medium text-black">
            {course.title}
           </h1>
           <p>{course.description}</p>
          </div>
          <div className='absolute bottom-2 w-[90%]'>
          <div className="flex justify-between items-center py-2">
            <h3 className="">$ Price: {course.price}</h3>

    <FiBookOpen ></FiBookOpen>
    <h3>Credit : {course.credit}hr</h3>

          </div>
          <button className='w-full text-center font-medium  text-white py-2 rounded bg-[#2F80ED]' onClick={()=>{
            handleSelectedCourse(course)
          }}>Select</button>
          </div>
        </div>
    );
}
CourseCard.propTypes = {
  handleSelectedCourse:PropTypes.func,
  course:PropTypes.object
}
export default CourseCard;
