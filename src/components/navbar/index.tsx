import React from 'react';
import { NavbarProps } from '../../App';
import NavbarView from './navbar-view';
export interface subNavDetails{
  navDetails:[]
}
const Navbar: React.FC <NavbarProps>=({navDetails}) => {
console.log(navDetails);    
  return (
    <>
      <div>
        <NavbarView navDetails={navDetails} />
      </div>
    </>
  );
};
export default Navbar;
