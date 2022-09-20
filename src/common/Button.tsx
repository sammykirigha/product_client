import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonHTMLAttributes } from './Interfaces';

const Button:React.FC<ButtonHTMLAttributes> = ({ text, type, id, to = "", handleClick =() => {} }) => {
  const navigate = useNavigate();

  return (
    <button
      type={type}
      id={id}
      onClick={() => to === "" ? handleClick() : navigate(to)}
      className={`btn-primary shadow-lg ${text === 'mass delete'? 'bg-red-500 hover:bg-red-600':' bg-[#0076CB] border-0 rounded-none hover:bg-[#0F46A7] '}`}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;

