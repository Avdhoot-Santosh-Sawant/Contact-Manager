import React, { useState, useEffect, useRef } from "react";
import "../component css/Contactcard.css";
import avtar from '../images/avtar.png'
import update from '../images/update.png'
import save from '../images/save.png'
import deleteimg from '../images/delete.png'

function ContactCard(props) {
  const [editable, setEditable] = useState(false);

  const [name, setName] = useState(props.contact.name);
  const [email, setEmail] = useState(props.contact.email);
  const [mobile, setMobile] = useState(props.contact.mobile || "");

  const updateRef = useRef()
  const saveRef = useRef()
  const data = useRef()
  const editableDiv = useRef()



  useEffect(() => {
    if (editable) {
      updateRef.current.style.display = "none"
      saveRef.current.style.display = "inline-block"

      data.current.style.display = "none"
      editableDiv.current.style.display = "block"

    }
    else {
      saveRef.current.style.display = "none"
      updateRef.current.style.display = "inline-block"

      editableDiv.current.style.display = "none"
      data.current.style.display = "block"

    }
  }, [editable])

  useEffect(() => {
    setName(props.contact.name)
    setEmail(props.contact.email)
    setMobile(props.contact.mobile || " ")
  }, [props])


  const deleteContact = (id) => {
    props.updateList(id);
    alert('Contact Deleted')
  }

  const updateContact = () => {
    setEditable(true)
  }

  const saveUpdate = () => {

    if (name === "" || email === "") {
      alert("All Fields Are Mendatory !")
      return;
    }
    else if (mobile.length !== 10) {
      alert('pPease, Enter valid mobile number !')
      return;
    }
    props.saveContactChange(props.id, name, email, mobile);
    setEditable(false)
  }

  return (
    <>

      <div className="contact-card">

        <div >
          <div className='info'>
            <div>
              <img alt=".Avtar" src={avtar} className='avtar' />
            </div>
            <div ref={data} className='data'>

              <h4 className="d" style={{ textTransform: 'capitalize' }}>{name}</h4>
              <h4 className="d">{email}</h4>
              <h4 className="d">{mobile}</h4>

            </div>

            <div ref={editableDiv} >
              <input className="name-input" type={"text"} value={name} placeholder="Enter name :- " onChange={(e) => { setName(e.target.value) }} />
              <input className="email-input" type={"email"} value={email} placeholder="Enter email :- " onChange={(e) => { setEmail(e.target.value) }} />
              <input className="number-input" type={"number"} value={mobile} placeholder="Enter mobile number :- " onChange={(e) => { setMobile(e.target.value) }} />
            </div>
          </div>
        </div>



        <div className="div-icon">

          <i className="update-icon" onClick={() => { updateContact() }} ref={updateRef} title='update'>
            <img src={update} alt=".." width={'25px'} />
          </i>

          <i className="save-icon" onClick={() => { saveUpdate() }} ref={saveRef} title='save'>
            <img src={save} alt=".." width={'25px'} />
          </i>

          <i className="del-icon" onClick={() => { deleteContact(props.id) }} title='delete'>
            <img src={deleteimg} alt=".." width="25px" />
          </i>

        </div>

      </div>
    </>
  );
}

export default ContactCard;
