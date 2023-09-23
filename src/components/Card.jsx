import React, { useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
function Card({items}) {
const [time] = useState(new Date(items.created_time.seconds * 1000))
  return (
    <div className='col-12'>
      <div className="card">
        <div className="card-title"><span className='badge text-bg-dark'>User:{items.author}</span> <span
        className='badge text-bg-primary'
        >created_time:
       {String(time)}
          </span></div>
        <div className="card-image">
          <img 
          className='img-fluid w-100'
          src={items.poster} alt={items.poster} />
        </div>
        <div className="card-body">
          <div className="card-body-like">
            <AiOutlineLike size={40} /> <span className='text-danger'>0</span>  <BiDislike size={40} /> <span className='text-warning'>0</span>
          </div>
          <p>
            {items.text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card