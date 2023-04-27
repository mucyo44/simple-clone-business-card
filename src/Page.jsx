
import {React} from "react"
import Logo from "./assets/react.svg"


 export const Page = ()=>{
    return(<div className="container">
      <nav className="nav-bar">
      <img  src={Logo}/>
      
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="main">
      <h1>FUN  FACTS ABOUT REACT</h1>
      <ul>
        <li> Was first released in 2013</li>
        <li> Was originally created by Jordan Walke</li>
        <li> Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li> Powers thousand of enterprise apps, including mobile apps</li>
      </ul>
      </div>
      
    </div>
    )
  }