import React, { Component } from 'react'

export class RestaurantMake extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:null,
             email:null,
             address:null,
             
             rating:null
            }
    }
    create(){
        fetch("http://localhost:3000/restorant",{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)

        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restorant has been added")
            })
        })
    }
    
    render() {
        return (
            <div>
                <h1>RestaurantMake</h1>
                <div>
                    <input onChange={(e)=>{this.setState({name:e.target.value})}} placeholder="Restorent Name" /><br></br>
                    <br></br>
                    <input onChange={(e)=>{this.setState({address:e.target.value})}} placeholder="Restorent address" /><br></br>
                    <br></br>
                    <input onChange={(e)=>{this.setState({email:e.target.value})}} placeholder="Restorent email" /><br></br>
                    <br></br>
                    <input onChange={(e)=>{this.setState({rating:e.target.value})}} placeholder="Restorent rating" /><br></br>
                    <br></br>
                    <button onClick={()=>{this.create()}}>Add Restorant</button>
                </div>
            </div>
        )
    }
}

export default RestaurantMake
