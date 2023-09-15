import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'
import Main from './Components/Main/Main'


function App() {
  const [selectedCourse,setSelectedCourse] = useState([]);
  const [creditHour,setCreditHour] = useState(0);
  const [remainingHour,setRemainingHour] = useState(20);
 
const handleSelectedCourse = (course)=>{
  const duplicate = selectedCourse.find(item=> item.id === course.id);
  if(duplicate){

    toast.error("Each course can only be selected once", {
      position: toast.POSITION.TOP_RIGHT
    }
    )
    return;
  }
  else{
  
 
  let x = course.credit;
  const totalHour = x + creditHour;
  const totalHourRemaining =  20 - totalHour;

  if(totalHour > 20){

  toast.error('The maximum credit hour limit  has been  exceeded', {
    position: toast.POSITION.TOP_RIGHT
    
});
  return;
  }

    setCreditHour(totalHour)
  
  const newList = [...selectedCourse,course];
  setRemainingHour(totalHourRemaining);
  
setSelectedCourse(newList);
  }
  }


  return (
    <>
      <section className='inter bg-[#F3F3F3] relative  px-10'>
     <h1 className="text-3xl text-black text-center py-2 font-semibold">Course Registration</h1>
     <ToastContainer/>
<Main handleSelectedCourse = {handleSelectedCourse} selectedCourse = {selectedCourse} creditHour = {creditHour} remainingHour = {remainingHour}></Main>

      </section>
    </>
  )
}

export default App
