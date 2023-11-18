/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CustomSwap from "../utility/CustomSwap";

const Navbar = ({ theme, handelSwitchTheme }) => {
  return (
    <div className="bg-primary text-primary-content">
      <div className="navbar container m-auto">
        <div className="w-full">
          <div className="px-">المود | Theme</div>
        </div>
        <div>
          <CustomSwap theme={theme} handelSwitchTheme={handelSwitchTheme} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
