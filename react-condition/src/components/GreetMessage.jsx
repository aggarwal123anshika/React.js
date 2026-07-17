// import React from 'react'
import LogIn from "./LogIn";

const GreetMessage = (props) => {
    console.log(props.status);
    // console.log(props.status);
  
    // <div>
    //     <h2 className="welcome">Welcome user! 🎉</h2>
    // </div>
    if(props.status) {
        return <h2 className="welcome">Welcome user! 🎉</h2>
    }
    else {
        return <LogIn />
    }
}

export default GreetMessage