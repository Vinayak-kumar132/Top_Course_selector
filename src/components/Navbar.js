import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='bg-bgDark py-4'>
            <h1 className='text-3xl text-white font-bold text-center'>Top Course</h1>
        </nav>
    </div>
  )
};

export default Navbar




// import React from 'react';

// export function Navbar() {
//   return (
//     <div>
//       <nav>
//         <h1>Top Course</h1>
//       </nav>
//     </div>
//   );
// }

// if i write like this then in Navbar.js we need to write import as 
//import { Navbar } from "./components/Navbar";  not -->import Navbar from "./components/Navbar";
