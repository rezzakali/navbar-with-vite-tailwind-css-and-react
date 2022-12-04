import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="w-full h-[90px] absolute">
      <div className="mx-auto p-4 flex justify-between h-full items-center bg-[#0b1221]">
        <div>
          <h1 className="text-3xl text-[#38bdf8]">LOREM</h1>
        </div>
        <div className="flex">
          <ul className="hidden md:flex">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <button className="ml-2">Hire me</button>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            {showNav ? (
              <AiOutlineClose
                size={20}
                className="mr-2 cursor-pointer text-white text-center "
              />
            ) : (
              <AiOutlineMenu
                size={20}
                className="cursor-pointer text-white text-center "
              />
            )}
          </div>
        </div>
      </div>
      <div className={showNav ? 'bg-[#0b1221] px-4' : 'absolute left-[-100%]'}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <button className="px-4 mx-4 py-1 my-2">Hire me</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
