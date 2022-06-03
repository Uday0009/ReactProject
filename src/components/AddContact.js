import React from "react";
class AddContact extends React.Component{
   state={
      id:"",
      name:"",
      email:"",
      phone:""
   };
   add=(e)=>{
      e.preventDefault();
      if(this.state.id===""||this.state.name==="" || this.state.email==="" || this.state.phone===""){
         alert("All details are manadatory");
         return ;
      }
      if((this.state.phone).length!==10){
         alert("Phone Number is of 10 digits");
          return;
      }
      this.props.addContactHandler(this.state);
      this.setState({id:"",name:"",email:"",phone:""});
   };
       render(){
           return(
           <div className="ui main">
              <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                <div className="field">
                   <label>id</label>
                   <input type="number" name="name" placeholder="Id" value={this.state.id} onChange={(e)=>this.setState({id: e.target.value})}/>
                   </div>
                   <div className="field">
                   <label>Name</label>
                   <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/>
                   </div>
                   <div className="field">
                   <label>Email</label>
                   <input type="email" name="email" placeholder="Name"  value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}/>
                   </div>
                   <div className="field">
                   <label>Phone Number</label>
                   <input type="text" name="text" placeholder="Name"  value={this.state.phone} onChange={(e)=>this.setState({phone: e.target.value})}/>
                   </div>
                   <button className="ui button blue">Add</button>
                </form>
           </div>
           );
   };
}
export default AddContact;