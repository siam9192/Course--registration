import { useState } from 'react'
import './App.css'
import Main from './Components/Main/Main'

function App() {
  const [selectedCourse,setSelectedCourse] = useState([]);
  const [creditHour,setCreditHour] = useState(0);
  const [remainingHour,setRemainingHour] = useState(0);
const handleSelectedCourse = (course)=>{
  const duplicate = selectedCourse.find(item=> item.id === course.id);
  if(duplicate){
    alert('This course already has been added');
    return;
  }
  else{
  
 
  let x = course.credit;
  const totalHour = x + creditHour;
  const totalHourRemaining =  20 - totalHour;
  console.log(totalHourRemaining)
  if(totalHour > 20){
    alert("Bala aso naki")
    return;
  }
  
  else{
    if(remainingHour < 0){
      alert(remainingHour);
      return
    }
    setCreditHour(totalHour)
  const newList = [...selectedCourse,course];
  setRemainingHour(totalHourRemaining);
  
setSelectedCourse(newList);
  }
  }
}

  return (
    <>
      <section className='bg-[#F3F3F3]'>
     <h1 className="text-3xl text-black text-center py-2 font-semibold">Course Registration</h1>
<Main handleSelectedCourse = {handleSelectedCourse} selectedCourse = {selectedCourse} creditHour = {creditHour} remainingHour = {remainingHour}></Main>
      </section>
    </>
  )
}

export default App
