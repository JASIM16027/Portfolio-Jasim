// import React from 'react'
// import {FaGithub, FaLinkedin} from 'react-icons/fa'
// import {HiOutlineMail} from 'react-icons/hi';
// import {BsFillPersonLinesFill} from 'react-icons/bs';


// const socialLinks = () => {
//   return (
//     <div className="flex flex-col top-[35%] left-0 fixed">
//         <ul>
//             <li className="flex justify-between items-center w-40 h-1/4 px-4 bg-black">
        
//                 <a href="" className="flex justify-between items-center w-full text-white">
              
//                     LinkedIn <FaLinkedin size={25}/>
                    
//                 </a>
//             </li>
//         </ul>
//     </div>
//   )
// }

// export default socialLinks


import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jasim-uddin-042715136/',
      icon: <FaLinkedin size={25} />,
      style: 'bg-blue-600',
    },
    {
      id: 2,
      name: 'GitHub',
      href: 'https://github.com/JASIM16027',
      icon: <FaGithub size={25} />,
      style: 'bg-gray-800',
    },
    {
      id: 3,
      name: 'Email',
      href: 'mailto:jasimcse27@gmail.com',
      icon: <HiOutlineMail size={25} />,
      style: 'bg-green-600',
    },
    {
      id: 4,
      name: 'Resume',
      href: '/resume.pdf',
      icon: <BsFillPersonLinesFill size={25} />,
      style: 'bg-red-600',
      download: true,
    },
  ];

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, name, href, icon, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ${style} ml-[-100px] hover:ml-[-10px] duration-300`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
              download={download ? 'resume' : undefined}
            >
              {name} {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
