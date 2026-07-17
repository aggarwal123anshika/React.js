// import React from 'react'

const Offer = ({price}) => {
  return (
    <div>
        <p>Price : Rs:{price}</p><br></br>
        {price < 500 && <span>LIMITED TIME OFFER! GRAB IT QUICKLY!!🎉</span>}
    </div>
  )
}

export default Offer