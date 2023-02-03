import React, { useState, useEffect, useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import '../component css/ContactList.css'

const ContactList = function (props) {

    const [search, setSearch] = useState('');
    const [searchMatch, setSearchMatch] = useState([]);

    const num_search = useRef();

    useEffect(() => {

        if (search.length !== 0) {

            const list = props.contacts.map((con, index) => {
                con.id = index;
                return con
            })

            console.log(list)

            const s = list.filter((con, index) => {
                return con.name.includes(search.toLowerCase())
            })
            setSearchMatch(s)

        }
        num_search.current.style.visibility = 'hidden'

    }, [search, props]);

    const updateList = (id) => {
        const newList = props.contacts.filter((contact, index) => {
            return index !== id;
        })
        console.log(newList)
        props.updateContact(newList)
    }

    const saveContactChange = (id, name, email, mobile) => {

        const contacts = props.contacts;
        const contact = {
            name: name,
            email: email,
            mobile: mobile
        }
        contacts[id] = contact
        localStorage.setItem('contacts', JSON.stringify(contacts))
        setSearch('')
        alert('contact updated!')
    }

    const result = () => {
        num_search.current.style.visibility = 'visible'
        setTimeout(() => {
            num_search.current.style.visibility = 'hidden'

        }, 1000)
    }

    return (
        <>
            <div className="window">
                <div style={{ overflow: "auto" }}>
                    <Link to="/add">
                        <button id="add-contact-btn" >Add Contact</button>
                    </Link>
                </div>



                <div className="container">

                    <div className="div1">
                        <input placeholder="enter name" type={'text'} id='in' value={search}
                            onChange={(e) => { setSearch(e.target.value) }} />
                        <button id='search' onClick={result}>Search</button>
                    </div>

                    <div ref={num_search} style={{ marginTop: "5px", color: 'blue' }}>
                        <i>Total Result :- {search.length === 0 ? props.contacts.length : searchMatch.length}</i>
                    </div>



                    <div className="contact-list">

                        {
                            search.length === 0 ? props.contacts.map((contact, index) => {
                                return (<ContactCard id={index} key={index} contact={contact} updateList={updateList} saveContactChange={saveContactChange} />);
                            }) : searchMatch.map((contact, index) => {
                                return (<ContactCard id={contact.id} key={contact.id} contact={contact} updateList={updateList} saveContactChange={saveContactChange} />);
                            })
                        }

                    </div>





                </div>


            </div>



        </>
    )
}


export default ContactList