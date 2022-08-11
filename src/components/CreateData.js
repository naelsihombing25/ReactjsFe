import React from "react";
import api from "../api";

export default class CreateData extends React.Component {
    state = {
      name: ''
    }
  
    handleChange = event => {
      this.setState({ name: event.target.value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const buku = {
        namabuku: this.state.namabuku
      };
  
      api.post('http://192.168.43.203:8080/api/buku', { buku })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> ID </label>
                                            <input placeholder="Enter Your ID" name="idbuku" className="form-control" 
                                                onChange={this.handleChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Name </label>
                                            <input placeholder="Enter Your Name" name="namabuku" className="form-control" 
                                               onChange={this.handleChange}/>
                                        </div>

                                        <button onClick={this.handleSubmit} className="btn btn-success">Save</button>
                                        {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}