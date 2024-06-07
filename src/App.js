import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./data";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";




const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].title);
  // useEffect(()=>{
  //   const fetchData=async()=>{
  // },[]);


  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      //Save data into variable
      //  console.log(output);
      setCourses(output.data);
    }

    catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      
      <div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
          // here loader is needed because during api call courses has null value so it shows an error
        }
      </div>
      </div>

      





    </div>

  );

};

export default App;
