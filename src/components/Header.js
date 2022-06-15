import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ name }) => {
  return (
    <div className="header">
      <h1 >{name}Task App </h1>
      <Button color='blue' />
      {/* <Button color='green' text='Calculate' /> */}

    </div>
  )
}
Header.defaultProps = {
  name: 'Kumix'
}
Header.propTypes = {
  name: PropTypes.string,
}
// const heading = {
//   color: '#000',
//   backgroundColor: 'blue',
// }

export default Header