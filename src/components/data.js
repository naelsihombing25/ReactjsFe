import React from "react";
import "./data.css";
//import axios from "axios";
import DataService from "../service/DataService";

class data extends React.Component {
   
  // Constructor 
  constructor(props) {
      super(props);
 
      this.state = {
          items: []
      }
  }
 
  // ComponentDidMount is used to
  // execute the code
  // http://192.168.43.203:8080/api/v1/person/

//   componentDidMount() {
//       fetch(
// // "http://192.168.43.203:8080/api/v1/person/"
// // https://jsonplaceholder.typicode.com/users
// "https://jsonplaceholder.typicode.com/users")
//           .then((res) => res.json())
//           .then((json) => {
//               this.setState({
//                   items: json,
//                   DataisLoaded: true
//               });
//           })
//   }
  componentDidMount() {
    // GET request using axios with error handling
    DataService.get().then(res => {
        this.setState({items: res.data});
    })
}
  render() {
      return (
      <div className = "form">
          <h1> Fetch data from an api backend</h1>
          <table className="table table-striped table-bordered" align="center">
            <thead>
                <tr>
                    <th>ID</th>
                    {/* <th>Nama</th>
                    <th>Actions</th> */}
                </tr>
            </thead>
            <tbody>
                {
              this.state.items.map(item =>  
              <tr key = { item.id } >
                <td>{item.id}</td>
                <td>{ item.nama }</td>
                <td>
                    <button className="btn btn-info">Update</button>
                    <button style={{marginLeft: "10px"}} className="btn btn-danger">Delete</button>
                </td>
              </tr>
              )
                }
            </tbody>
            </table>  
      </div>
  );
}
}
 
export default data;