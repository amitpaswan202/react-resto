import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             pass:''
        }
    }
    login(){
        console.warn(this.state)
        
        fetch("http://localhost:3000/login?q="+this.state.name).then((data) =>{
            data.json().then((resp) => {
                console.warn("resp",resp)
                if(resp.length>0) 
                {
                    localStorage.setItem('login',JSON.stringify(resp))
                  console.warn(this.props.history.push('list'))
                }
                else
                {
                    alert("please check the user name or password")
                }
              
            })
        })
    }
    render() {
        return (
            <div>
                <h1> Log In Form</h1><br></br><br></br>
                <input type="text" name="user" placeholder=" Enter User" onChange={(event)=>this.setState({name:event.target.value}) } /><br></br><br></br>
                <input type="password" name="password" placeholder=" Enter Password" onChange={(event)=>this.setState({pass:event.target.value})} /><br></br><br></br><br></br>
                <button onClick={()=>{this.login()}}> Log In</button>
            </div>
        )
    }
}
