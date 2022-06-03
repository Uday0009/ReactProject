import React from "react";
import pic from "./person.png";
const ContactCard=(props)=>{
   // function to render contacts 
   const {id,name,email,phone}=props.contact;
            return (
                  
                  <div className="item">
                     <img className="ui avatar image" src={pic} alt="pic"/>
                     <div className="content">
                     <div className="header">{id}</div>
                        <div className="header">{name}</div>
                       <div  className="header">{email}</div>
                       <div className="header">{phone}</div>
                       </div>
                        <i className="trash alternate outline icon"
                  style={{color:"blue",marginTop:"7px"}}
                 onClick={()=>props.clickhandler(id)}
                  ></i>
                  </div>
            );
         };
export default ContactCard;