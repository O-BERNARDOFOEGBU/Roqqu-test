import React from 'react'

const Title = (props) => {
  return (
    <>
    <p className='info-title'>{props.text}</p>
    <div className='info-text'>{props.text}</div>
    </>
  )
}

export default info