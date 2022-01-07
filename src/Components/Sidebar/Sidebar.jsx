import React from "react";
import ProfileCard from "../Cards/ProfileCard"

const Sidebar = () => {
  return (
    <div className="bg-amber-500  text-white space-y-6 px-4 
    py-7 absolute inset-y-0 left-0 transform -translate-x-full 
    transition duration-200 ease-in-out md:relative md:translate-x-0">
        <ProfileCard/>
        <nav>
          <a href="/" className="font-semibold block rounded py-2 px-4 hover:bg-amber-600 text-sm lg:text-lg">
            Inicio
          </a>
          <a href="/" className="font-semibold block rounded py-2 px-4 hover:bg-amber-600  text-sm lg:text-lg">
            Informacion
          </a>
          <a href="/" className="font-semibold block rounded py-2 px-4 hover:bg-amber-600  text-sm lg:text-lg">
            Formacion
          </a>
          <a href="/" className="font-semibold block rounded py-2 px-4 hover:bg-amber-600 text-sm lg:text-lg">
            Acerca de mi
          </a>
          <a href="/" className="font-semibold block rounded py-2 px-4 hover:bg-amber-600 text-sm lg:text-lg">
            Contacto
          </a>
        </nav>
      </div>
  );
};

export default Sidebar;
