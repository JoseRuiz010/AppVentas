import React from 'react'

export const Button = ({ textButton, action, className, icon }) => {
  return (
    <button className={` ${!className ? 'btn' : className}`} onClick={action}>
      {icon && icon}
      {textButton}
    </button>
  )
}
