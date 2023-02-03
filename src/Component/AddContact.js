import React, { useState } from "react";
import '../component css/AddContact.css'


const AddContact = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');


  const add = (e) => {
    e.preventDefault()


    if (name === "" || email === "") {
      alert("All Fields Are Mendatory!")
      return;
    }
    else if (mobile.length !== 10) {
      alert("Please enter valid mobile number !")
      return;
    }

    props.addContactHandler({
      name, email, mobile
    });
    window.history.back()

  }


  return (
    <>

      <div>
        <div className="con">

          <div className="h2">
            <h2>Add Contact</h2>
          </div>

          <div className="f">
            <form onSubmit={(e) => { add(e) }}>
              <div>
                <lable >Name</lable>
                <br />
                <input
                  type="text"
                  id="name"
                  placeholder=" Enter name"
                  value={name}
                  onChange={(e) => { setName(e.target.value) }} />
              </div>

              <div>
                <lable >Email</lable>
                <br />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }} />
              </div>

              <div>
                <lable >Mobile Number</lable>
                <br />
                <input
                  type="number"
                  id="mobile"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) => { setMobile(e.target.value) }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button id="add-btn">Add</button>
              </div>
            </form>
          </div>
        </div>

      </div>

    </>
  );

}

export default AddContact;
