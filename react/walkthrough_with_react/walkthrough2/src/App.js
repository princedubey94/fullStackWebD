
import { useState } from "react";
import logo from "./assets/instagram.png"
import "./App.css"
function App() {
  const [login,setlogin]=useState(true);
  const toggle=()=>{
    setlogin(!login);
  }
  return (
    <div className="container">
      <div className='logo'>
        <img src={logo}/>
        <input type="text" hidden={login} placeholder="Mobile Number or Email"/>
        <input type="text" hidden={login} placeholder="Full Name" />
        <input type="text" placeholder="Phone number,username,or email"/>
        <input type="password" placeholder="Password"/>
        <button>{!login ? "Sign up" : "Sign in"}</button>
        <div className="footer">{login? "Don't have an account?" : "have an account?"}<span onClick={toggle}>{login?"Sign up":"Sign in"}</span></div>
      </div>
    </div>
  );
}

export default App;
