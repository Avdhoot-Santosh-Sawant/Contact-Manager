import React from "react";
import '../component css/AddContact.css'

class AddContact extends React.Component {
  



   constructor(){
    super()
    this.state={
  
      name:"",
      email:""
    }
   }



   add=(e)=>{
     e.preventDefault()

     if(this.state.name === "" || this.state.email=== ""){
      alert("All Fields Are Mendatory!")
      return;
     }

     this.props.addContactHandler(this.state);
     this.setState({
      name:"",
      email:""
    })
   
    window.history.back()

   }
  
  render() {
    return (
      <>
     
     <div className="con">

     <div className="h2">
          <h2>Add Contact</h2>
        </div>

        <div className="f">
          <form onSubmit={this.add}>
            <div>
              <lable >Name</lable>
              <br />
              <input
               type="text"
                id="name" 
                placeholder="name" 
                value={this.state.name}
                onChange={(e)=>{this.setState({name:e.target.value})}}/>
            </div>

            <div>
              <lable >Email</lable>
              <br />
              <input
               type="email"
                id="email"
                 placeholder="email" 
                 value={this.state.email}
                 onChange={(e)=>{this.setState({email:e.target.value})}}/>
            </div>

            <button id="add-btn">Add</button>
          </form>
        </div>
     </div>
       
      </>
    );
  }
}

export default AddContact;
