import React from 'react';
import Image from '../../assets/resident-evil-3.jpg';
import './heroImage.css';

const HeroImage = () => {
  return (
    <div className="HeroImage">
      <img src={Image} alt="Resident evil 3 HeroImage" />
    </div>
  );
};

export default HeroImage;
