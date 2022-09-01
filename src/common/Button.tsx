import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonHTMLAttributes } from './Interfaces';

const Button:React.FC<ButtonHTMLAttributes> = ({ text, type, to = "", handleClick =() => {} }) => {
  const navigate = useNavigate();

  return (
    <button
      type={type}
      onClick={() => to === "" ? handleClick() : navigate(to)}
      className={`btn-primary shadow-lg ${text === 'massdelete'? 'bg-red-500 hover:bg-red-700':' bg-[#0076CB] border-0 rounded-none hover:bg-[#0F46A7] '}`}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;

