/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function WorkItems({item}) {
  return (
    <div className='work__card'>
      <img src={item.image} alt={item.title} className='work__img' />
      <h3 className='work__title'>{item.title}</h3>
      <a href="#" className="work__button">
        Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>
    </div>
  )
}

export default WorkItems