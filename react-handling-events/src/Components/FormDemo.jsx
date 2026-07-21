// import React from 'react'

const FormDemo = () => {
    const handleSubmit=(event)=> {
        event.preventDefault()
        console.log("form submitted..")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
           Name : <input type="text" placeholder='Enter your name'/><br/>
           Email : <input type="email" placeholder='Enter your email'/><br/>
           Password : <input type="password" placeholder='Enter your password'/><br/>
           <button>Submit</button>
        </form>
    </div>
  )
}

export default FormDemo