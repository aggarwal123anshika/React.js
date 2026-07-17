// import GreetMessage from "./components/GreetMessage"
// import Status from "./components/Status";
// import Offer from "./components/Offer";

import UserRole from "./components/UserRole"



function App() {
  // let isLoggedIn = prompt("Enter your status : true or false")
  // let isLoggedIn = false; //  agar hm yha p tru kr denge toh welcome user print hoga quki props.status m if condition true ho jayegi
  // let ActiveStatus = true;
  // let price = 800;
  let role = "admin";

 
  return (
    <>
    {/* <GreetMessage status={isLoggedIn}/> */}
    {/* <Status status={ActiveStatus}/> */}
    {/* <Offer price={price}/> */}
    <UserRole role={role}/>
    </>
  )
}

export default App
