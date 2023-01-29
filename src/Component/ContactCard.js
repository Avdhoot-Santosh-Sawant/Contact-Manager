import React, { useState,useEffect,useRef } from "react";
import "../component css/Contactcard.css";
import del from "../images/bin.png";
import { Link } from "react-router-dom";

function ContactCard(props) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(props.contact.name);
  const [email, setEmail] = useState(props.contact.email);

  const updateRef=useRef()
  const saveRef=useRef()
  const data=useRef()
  const editableDiv=useRef()


  useEffect(()=>{
    if(editable){
      updateRef.current.style.display="none"
      saveRef.current.style.display="inline-block"

      data.current.style.display="none"
    editableDiv.current.style.display="block"   
    
    }
    else{
      saveRef.current.style.display="none"
      updateRef.current.style.display="inline-block"

     editableDiv.current.style.display="none"
      data.current.style.display="block"
     
    }
  },[editable])

  // const { name, email } = props.contact;

  const deleteContact = (id) => {
    props.updateList(id)
  }

  const updateContact=()=>{
      setEditable(true)
  }

  const saveUpdate=()=>{

    if(name === "" || email=== ""){
      alert("All Fields Are Mendatory!")
      return;
     }    
    console.log(name,email); 
    props.saveContactChange(props.id,name,email);
     setEditable(false)
  }

  return (
    <>

      <div className="contact-card">

      <div ref={data}  >
      <Link to={`/ContactDeatil:${props.id}`}>
          <h4>{name}</h4>
          <h4>{email}</h4>
        </Link>
      </div>

      <div ref={editableDiv} >
        <input  className="name-input" type={"text"} value={name} placeholder="Enter name :- "   onChange={(e)=>{setName(e.target.value)}}/>
        <input className="email-input" type={"email"} value={email} placeholder="Enter email :- " onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>

        <div className="div-icon">

          <i className="del-icon" onClick={() => { deleteContact(props.id) }}>
            <img src={del} alt=".." width="25px" />
          </i>


          <i className="update-icon" onClick={() => { updateContact()}} ref={updateRef}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
            </svg>
          </i>


          <i className="save-icon" onClick={() => { saveUpdate()}} ref={saveRef}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 416c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" /></svg>
          </i>


        </div>
      </div>
    </>
  );
}

export default ContactCard;
