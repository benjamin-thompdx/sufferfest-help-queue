import React from 'react';
import sufferfestlogo from './../sufferfestlogo.png'

function Header(){
  return (
    <React.Fragment>
    <img src={sufferfestlogo} alt="Sufferfest logo" />
    <h1>Help Queue</h1>
    </React.Fragment>
  );
}

export default Header;