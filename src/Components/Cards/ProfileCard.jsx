import React from "react";
import ProfileImg from "../../Assets/img/profileImage.jpg";

const ProfileCard = () => {
  return (
    <div className="grid grid-cols-1  rounded-2xl ">
      <img src={ProfileImg} alt="" className="rounded-full p-3" />
      <div className="flex flex-wrap justify-center  items-center p-4">
        <h1 className="text-white font-bold lg:text-2xl ">Ricardo Zuñiga</h1>
        <h2 className=" text-white font-bold lg:text-xl ">Desarrollador</h2>
      </div>
    </div>
  );
};

export default ProfileCard;
