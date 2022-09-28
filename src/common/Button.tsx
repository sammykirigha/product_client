import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonHTMLAttributes } from './Interfaces';

const Button: React.FC<ButtonHTMLAttributes> = ({ text, to = "", handleClick = () => { }, ...props }) => {
  const navigate = useNavigate();

  return (
    <button
      {...props}
      onClick={() => to === "" ? handleClick() : navigate(to)}
      className={`btn-primary shadow-lg ${text === 'MASS DELETE' ? 'bg-red-500 hover:bg-red-600' : ' bg-[#0076CB] border-0 rounded-none hover:bg-[#0F46A7] '}`}
    >{text}</button>
  );
};

export default Button;

