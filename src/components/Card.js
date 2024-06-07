import React from 'react'
import { FcLike,FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = ( props ) => {
  let course=props.course;
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;
  function clickHandler(){
      if(likedCourses.includes(course.id)){
        //pahle se like hua hai
        setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
        toast.warning("Like Removed");
      }
      else{
        //pahle se like nhi h
        if(likedCourses.length === 0){
          setLikedCourses([course.id]);
        }
        else{
          // agar non empty pahle se hai to
          setLikedCourses((prev)=>[...prev,course.id]);
        }
        toast.success("Liked successfully");
      }
     }
  
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-95 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url}></img>
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-[15px] grid place-items-center'>
          <button onClick={clickHandler}>
          {
            likedCourses.includes(course.id) ? (<FcLike fontSize="2rem"/>):(<FcLikePlaceholder fontSize="2rem" />)
           }
            
          </button>
        </div>
      </div>

      <div className='p-4' >
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='text-white opacity-85 mt-2'>
          {
            course.description.length>100 ?
            (course.description.substr(0,100))+"...":(course.description)
          }
        </p>
      </div>

    </div>
  )
}

export default Card