import React from 'react';
import { Component } from 'react';
 
class Header extends Component{

  state = {
    keywords: ''
  }
  
  inputChangeHandler = (event) => { 
   // console.log(event.target.value)
   this.setState({
    keywords: event.target.value
   });
  }

  render(){
    console.log(this.state.keywords)
    return(
      <header>
        <div className="logo">Logo</div>
        <input type="text" onChange= { this.inputChangeHandler } />
      </header>
    )
  }
}

export default Header;