
import React from 'react'

const getId = () => {
    let id = window.location.href.split(':')[3]
    return id;
}

function ContactDetail(props) {

    const contact = props.contacts[Number(getId())];
    console.log(contact)



    return (
        <>

        </>
    );
}

export default ContactDetail