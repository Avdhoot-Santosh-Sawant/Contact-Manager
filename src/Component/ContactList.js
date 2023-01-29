import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import '../component css/ContactList.css'

const ContactList = function (props) {

    // const route_addContact=()=>{
    //     window.location.href+="add"
    // };

    const updateList = (id) => {
        const newList = props.contacts.filter((contact, index) => {
            return index !== id;
        })
        console.log(newList)
        props.updateContact(newList)
    }

    const saveContactChange = (id, name, email) => {

        const contacts = props.contacts;
        const contact = {
            name: name,
            email: email
        }
        contacts[id] = contact
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }

    return (
        <>
            <div style={{overflow:"auto"}}>
                <Link to="/add">
                    <button id="add-contact-btn" >Add Contact</button>
                </Link>
            </div>


            <div className="container">

                <div className="div1">

                    <h2 id="cl">Contact list</h2>
                </div>



                <div className="contact-list">

                    {
                        props.contacts.map((contact, index) => {
                            return (<ContactCard id={index} contact={contact} updateList={updateList} saveContactChange={saveContactChange} />);
                        })
                    }

                </div>





            </div>


        </>
    )
}


export default ContactList