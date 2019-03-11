import React from 'react'
import './title.scss'

const Title = (props)  => {
  
  return (
    <h2 className="default-title" style={{'color' : props.color}}>
      {props.title}
    </h2>

  ) 
}


export default Title;