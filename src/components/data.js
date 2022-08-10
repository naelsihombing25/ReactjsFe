import React from "react";
import "./data.css";
import axios from "axios";

class data extends React.Component {
   
  // Constructor 
  constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          DataisLoaded: false
      };
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
    axios.get('http://192.168.43.203:8080/api/buku')
    .then(res => {
        const items = res.data;
        this.setState({items});
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
              <tr key = { item.idbuku } >
                <td>{item.idbuku}</td>
                <td>{ item.namabuku }</td>
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