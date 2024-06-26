import React from 'react'
import Card from './Card'
import { useState } from 'react';


  const Cards = ( props ) => {
    let courses=props.courses;
    let category=props.category;
  
    const[likedCourses,setLikedCourses]=useState([]); 

  
  //Returns you a list of all courses from api response
  const getCourses=()=>{
    if(category==="All"){
      let allCourses=[];
      Object.values(courses).forEach((courseCategory)=>{
       courseCategory.forEach((course)=>{
         allCourses.push(course);
       })
      })
    return allCourses;
    }
    else{
      // mai sirf specific array ka data pass karunga
      return courses[category];
    }
    
  }
  
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>

      {/* Use parentheses instead of curly braces for the map callback */}

      {
      getCourses().map((course) => (
        <Card key={course.id} course={course} likedCourses={likedCourses}
         setLikedCourses={setLikedCourses}/>
      ))}

          
    </div>
  )
}

export default Cards
