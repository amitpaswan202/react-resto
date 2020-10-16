import React, { Component } from 'react'
import { Table,Container,Form} from "react-bootstrap";
import{Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export class RestaurantSearch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchData:null,
             noData:false,
             lastSearch:""
        }
    }
    
    search(key){
        console.warn(key)
        this.setState({lastSearch:key})
        fetch("http://localhost:3000/restorant?q="+key).then((data) =>{
            data.json().then((resp) => {
                console.warn("resp",resp)
                if (resp.length>0)
                {
                    this.setState({searchData:resp,noData:false})
                }
                else
                {
                    this.setState({noData:true, searchData:null })
                }
            })
        })

    }
    delete(id){
        fetch("http://localhost:3000/restorant/"+id,{
          method:"DELETE",
          // headers:{
          //     'Content-Type':'application/json'
          // },
          // body:JSON.stringify(this.state)
  
      }).then((result)=>{
          result.json().then((resp)=>{
              alert("Restorant has been  deleted")
              this.search(this.state.lastSearch)
          })
      })
    }
    render() {
        return (
            <Container>
                <h1>RestaurantSearch</h1>
                
                <Form.Control type="text" placeholder="search restorant"  onChange={(event)=>this.search(event.target.value)} />
                <div>
                    {
                        this.state.searchData?
                        
                        <div>
                            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Rating</th>
                  <th>Opration</th>
                </tr>
              </thead>
              <tbody>
                            {
                                this.state.searchData.map((item)=>
                                <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.email}</td>
                                <td>{item.rating}</td>
                                <td><Link to={"/update/" +item.id}><FontAwesomeIcon icon={faEdit} /> </Link>         
                                <span onClick={()=>this.delete(item.id)} ><FontAwesomeIcon icon={faTrash}  /> </span> </td> 
                                                 
                              </tr>
                                
                                )
                            }
                            </tbody>
            </Table>
                        </div>
                        :""
                    }
                    {
                        this.state.noData?<h3> no data found</h3>:null
                    }
                </div>
            </Container>
        )
    }
}

export default RestaurantSearch
