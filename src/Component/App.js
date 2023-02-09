
import React from "react"
import { useState, useEffect } from "react"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HashRouter, Routes, Route } from "react-router-dom";
import '../component css/app.css'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

const getContactData = () => {
  const rd = JSON.parse(localStorage.getItem("contacts"))
  if (rd) {
    return rd
  }
  else {
    return []
  }
}

function App() {

  const Local_Storage_Key = "contacts"
  const [contacts, setContacts] = useState(getContactData());



  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(contacts))
  }, [Local_Storage_Key, contacts]);

  const addContactHandler = (contact) => {
    contact.name = contact.name.toLowerCase();
    setContacts([...contacts, contact])
  };

  const updateContact = (updatedContact) => {
    setContacts(updatedContact);
  }

  return (
    <>
      <Header />

      <div id="app">
        <HashRouter>
          <Routes>
            <Route path="/" exact element={<ContactList contacts={contacts} updateContact={updateContact} />} />
            <Route path="/add" exact element={<AddContact addContactHandler={addContactHandler} len={contacts.length} />} />

          </Routes>
        </HashRouter>
      </div>

    </>
  );
}

export default App;

// {/* <AddContact addContactHandler={addContactHandler} />
//       <ContactList contacts={contacts} /> */}



