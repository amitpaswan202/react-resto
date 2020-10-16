import React, { Component } from "react";
import { Table,Container } from "react-bootstrap";
import{Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export class RestauranstList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null,
     
    };
  }
  componentDidMount() {
    this.refress()
  }
  refress(){
    fetch("http://localhost:3000/restorant").then((response) => {
        response.json().then((result) => {
          this.setState({ list: result });
        });
      });
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
            this.refress()
        })
    })
  }
  render() {
    return (
      <Container>
        <h1>RestauranstList</h1>

        {this.state.list ? (
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
                {this.state.list.map((item, i) => (
                  
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                    <td>{item.rating}</td>
                    <td><Link to={"/update/" +item.id}><FontAwesomeIcon icon={faEdit} /> </Link>         
                    <span onClick={()=>this.delete(item.id)} ><FontAwesomeIcon icon={faTrash}  /> </span> </td> 
                                     
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>please wait....</p>
        )}
      </Container>
    );
  }
}

export default RestauranstList;
