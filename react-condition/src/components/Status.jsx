// import React from 'react'

const Status = ({status}) => {
    // let ActiveStatus = true //jo bhi hmm pass krenge boolean value uske accordng hi ye value dega
  return (
    <div>
        <h2>User is {status ? "✅ONLINE" : "YOU ARE OFLINE❌"},  based on your activity status</h2>
    </div>
  )
}

export default Status