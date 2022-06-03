import React from "react";
import ContactCard from "./ContactCard";
const ContactList=(props)=>{
   // function to render contacts
   const delconhandler=(id)=>{
      props.getContactId(id);
   };
         const renderList=props.contacts.map((contact)=>{
            return <ContactCard contact={contact}clickhandler={delconhandler} key={contact.id}></ContactCard>;
            });
            return <div className="ui celled list">{renderList}</div>
         };
export default ContactList;