import React from "react";
import "./App.css";
import Heading from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactLists"
function App(){
  const contacts=[
    {
       id:"1",
       name: "Uday",
       email: "qwerty@gmail.com"
    },
    {
      id:"2",
      name: "Kiran",
      email: "qwerty@gmail.com"
   },
];
return (
      <div className="ui container">
        <Heading/>
        <AddContact/>
        <ContactList contacts={contacts}/>
      </div>
);
}
export default App;