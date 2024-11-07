import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    let menuItems = ['Home', 'About', 'Portfolio', 'Experiences','Contact'];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      
      <div>
        <h1 className="text-5xl font-signature ml-2">Md. Jasim Uddin</h1>
      </div>

      <ul className="hidden md:flex">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className=" px-8 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            {item}
          </li>
        ))}
      </ul>


      <div onClick= {()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
       { nav? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
            {menuItems.map((item, index) => (
                <li
                  key={index}
                className="px-8 cursor-pointer capitalize py-6 text-4xl">
                  {item}
                </li>
              ))}
            </ul>

      )}
  
    </div>
  );
};

export default Navbar;
