import React from 'react';
import { Link } from 'react-router-dom';
import {subNavDetails} from '.'

const NavbarView: React.FC<subNavDetails> = ({ navDetails }) => {
  return (
    <>
      <div>
        {navDetails.map((v: string, i: number) => {
          return (
            <div key={i}>
              <Link to ={`/${v.replace(/ /g,'')}`}>{v}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default NavbarView;
