import React,{useState, useEffect}from "react";
import "./App.css";
import Heading from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactLists"
function App(){
  const LOCAL_STORAGE_KEY="contacts";
  const[contacts,setContacts]=useState([]);
  const addContactHandler=(contact)=>{
    console.log(contact)
    setContacts([...contacts,contact]);
  };
//   useEffect(()=>{
//     const retrivedContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts)));
//    if(retrivedContacts) setContacts(retrivedContacts)
//   },[contacts]);
// useEffect(()=>{
//   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
// },[contacts]);
return (
      <div className="ui container">
        <Heading/>
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts}/>
      </div>
);
}
export default App;
//We use UseEffect to render info when states changes