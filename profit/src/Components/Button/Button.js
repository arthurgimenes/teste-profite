import React from 'react'
import './button.scss'

const Button = (props => {
  return (
    <button className="button-footer">
        <img src={props.src} alt={props.alt}/>
        <span>{props.title}</span>
    </button>
  )
})

export default Button 