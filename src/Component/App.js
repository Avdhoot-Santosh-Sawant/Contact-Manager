
import React from "react"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from "./ContactDetail"
import Footer from './Footer'

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
    setContacts([...contacts, contact])
  };

  const updateContact = (updatedContact) => {
    setContacts(updatedContact);
  }





  return (
    <>
      <Footer />

      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<ContactList contacts={contacts} updateContact={updateContact} />} />
          <Route path="/add" exact element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/ContactDeatil:id" exact element={<ContactDetail contacts={contacts} />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;

// {/* <AddContact addContactHandler={addContactHandler} />
//       <ContactList contacts={contacts} /> */}
