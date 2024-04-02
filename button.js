import React from 'react'
imoprt './button.css'
import {link} from 'React-router-dom';

const STYLE = ['btn--primary', 'btn--outline'];

const SIZES =['bt--medium', 'btn--large'];


export const button = ({children, type, oncClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLE.includes(buttonStyle)
  ? buttonStyle
  : STYLES[0];

  const checkButtonSize = SIZE.includes(buttonSize) : SIZE[0]

  return (
    <link to='/sign-up' className='btn-mobile'>
     <button
    clasName={'btn $(checkButtonStyle} ${checkButtonSize}'}
     onClick={oncClick}
     type={type}
     >

      {children}
     </button>
      </link>
  )
};