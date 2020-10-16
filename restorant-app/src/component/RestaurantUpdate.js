import React, { Component } from 'react'


export class RestaurantUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:null,
            email:null,
            address:null,
            id:null,
          
            rating:null
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/restorant/"+this.props.match.params.id).then((response) => {
         response.json().then((result) => {
             console.warn(result)
              this.setState({
                  name:result.name,
                  email:result.email,
                  address:result.address,
                  id:result.id,
                  rating:result.rating
             })
      })
    })
    }
    
    update(){
        fetch("http://localhost:3000/restorant/"+this.state.id,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)

        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restorant has been updated")
            })
        })
    }
    
    
    render() {
        return (
            <div>
                <h1>RestaurantUpdate</h1>
                <div>
                <input onChange={(e)=>{this.setState({name:e.target.value})}} placeholder="Restorent id"  value={this.state.id}/><br></br>
                    <br></br>
                    <input onChange={(e)=>{this.setState({name:e.target.value})}} placeholder="Restorent Name"  value={this.state.name}/><br></br>
                    <br></br>
                    <input onChange={(e)=>{this.setState({address:e.target.value})}} placeholder="Restorent address"  value={this.state.address}/><br></br>
                    <br></br>
                    <input onChange={(e)=>{this.setState({email:e.target.value})}} placeholder="Restorent email" value={this.state.email} /><br></br>
                    <br></br>
                    <input onChange={(e)=>{this.setState({rating:e.target.value})}} placeholder="Restorent rating" value={this.state.rating} /><br></br>
                    <br></br>
                    <button onClick={()=>{this.update()}}>Update Restorant</button>
                </div>
            </div>
        )
    }
}

export default RestaurantUpdate
