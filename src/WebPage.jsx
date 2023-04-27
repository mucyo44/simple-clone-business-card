
import {React} from "react"
import Laura from "./assets/laura.png"
import Email from "@material-ui/icons/Email"
import LinkedIn from "@material-ui/icons/LinkedIn"
import Twitter from "@material-ui/icons/Twitter"
import Facebook from "@material-ui/icons/Facebook"
import Instagram from "@material-ui/icons/Instagram"
import GitHub from "@material-ui/icons/GitHub"



export const WebPage = ()=>{

    return(
        <div className="main">
            <div className="header">
               
                <img src={Laura}  />
              
                  
               <div className="content">
               <div className="img">
               <h1 className="p1"> Laura Smith</h1>
                <h4 className="p2">Fronted Developer</h4>
                <h5 className="p3">laurasmith.website</h5>
                </div>
                <div className="button">
                <div className="email">
                    <h1><Email/></h1>
                    <h2>Email</h2>
                </div>
                <div className="linkedin">
                    <h1><LinkedIn/></h1>
                    <h2>LinkedIn</h2>
                </div>
                </div>
                <div className="body">
                    <h1>About</h1>
                    <p> I am a fronted developer with a particular interest in making things simple and automating daily tasks.I try to keep up with security and best practices, and always looking for new things to learn.</p>
                    <h1>Interests</h1>
                    <p>Food expert.Music scholar.Reader.Internet fanatic.Bacon buff.Entrepreneur.Travel geek. Pop culture ninja.Coffee 
                        fanatic</p>
                </div>
                </div>
                <div className="footer">
                   <h1><Twitter/></h1>
                   <h1><Facebook/></h1>
                   <h1><Instagram/></h1>
                   <h1> <GitHub/></h1>
                    </div>
                </div>   
              
 
                
        </div>
    )
}