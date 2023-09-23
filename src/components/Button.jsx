import React from 'react'

function Button({children}) {
  return (
    <button className='btn btn-dark'>
      {children}
    </button>
  )
}

export default Button