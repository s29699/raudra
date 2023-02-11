import React from 'react'

const Equipment = (props) => {
  return (
    <div className="row">
      <div className="col-4">
        <img src={props.img} alt="" />
        </div>
        <div className="col-8">
          <p className='ab'>{props.Name}</p>
          <p className='ab'>Status : {props.Status}</p>
          <p className='ab'>Description : {props.About}</p>
        </div>
      </div>

  )
}

export default Equipment