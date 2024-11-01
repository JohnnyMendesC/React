import React from 'react';
import GoogleLogo from './GoogleLogo.png';

export const GoogleLogoImage = () => {
  return (
    <img 
    src={GoogleLogo} 
    alt="Logomarca da Google" 
    style={{ width: '6.5vh', height: 'auto', backgroundColor:'transparent' }} 
    />
  );
};