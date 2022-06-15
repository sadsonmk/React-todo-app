import React from 'react'

const Button = ({ color, text }) => {
  const onClick = (e) => {
    console.log(e)
  }
  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>
    </div>
  )
}

export default Button

Button.defaultProps = {
  text: 'Add',
}