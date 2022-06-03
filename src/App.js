import React,{useState, useEffect}from "react";
import "./App.css";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Heading from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"
function App(){
  const LOCAL_STORAGE_KEY="contacts";
  const[contacts,setContacts]=useState([]);
  const addContactHandler=(contact)=>{
    console.log(contact)
    setContacts([...contacts,{...contact}]);
  };

  const removeContactHandler=(id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id!==id;
    });
    setContacts(newContactList);
  };
useEffect(()=>{
 const retContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
 if(retContacts)
 setContacts(retContacts)
},[]);   
useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))},[contacts]);
return (
      <div className="ui container">
        <Heading/>
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>
      </div>
);
}
export default App;
//We use UseEffect to render info when states changes