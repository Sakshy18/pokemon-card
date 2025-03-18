import React from "react";
import logo from "../assets/logo_poke.png"; 

const Logo: React.FC = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <img src={logo} alt="Pokemon Logo" className="h-80 w-auto" />
    </div>
  );
};

export default Logo;
