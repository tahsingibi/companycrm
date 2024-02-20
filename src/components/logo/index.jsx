import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.svg';
import LogoIcon from '../../assets/logoIcon.svg';

const source = {
  logo: LogoImage,
  icon: LogoIcon,
};

export default function Logo({
  href = '/',
  className = '',
  type = 'logo',
  ...args
}) {
  const imgSrc = source[type] || LogoImage;

  return (
    <Link to={href} {...args}>
      <figure className={className}>
        <img src={imgSrc} alt="Company CRM" className="min-w-8" />
      </figure>
    </Link>
  );
}
