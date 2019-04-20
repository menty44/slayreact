
import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Loader from 'react-loader-spinner';
import Button from '@material-ui/core/Button';
// import Button from 'react-bootstrap-button-loader';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      number: '',
      message: ''
    }
  }
  onChangeNumber(e) {
    this.setState({
      number: e.target.value
    });
  }
  onChangeMessage(e) {
    this.setState({
      message: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      number: this.state.number,
      message: this.state.message
    };

    if(!obj.number || !obj.message) {
      swal('Whoa!', 'Missing Values!', 'error');
    }else{
      axios.post('http://localhost:4000/sms/add', obj)
        .then(res => 
          // console.log('response from saved data', res.data)
          success(res.data)          
        );
    }

    this.setState({
      number: '',
      message: ''
    })
      
    function success(dat){
      console.log('received data', dat);
      if(dat.sms === 'sms in added successfully') {
        swal('SENT!', 'Sms sent successfully!', 'success');
      }else{
        swal('Whoa!', 'Error in saving the data!', 'error');
      }
    }
    
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Send SMS</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Phone Number:  </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.number}
                        onChange={this.onChangeNumber}
                        />
                </div>
                <div className="form-group">
                    <label>Message: </label>
                    <input type="text" 
                        className="form-control"
                        value={this.state.message}
                        onChange={this.onChangeMessage}
                        />
                </div>
                
                <div className="row">
                <div className="col-md-12">
                    <input type="submit" style={{width: '100%'}} value="Register SMS" className="btn btn-primary"/>
                </div>    
                {/* <div>
                <Button variant="contained" color="primary" style={{width: '100%'}} >
                    Hello World
                </Button>
                </div>  */}
                </div>
            </form>
            
        </div>
    )
  }
}