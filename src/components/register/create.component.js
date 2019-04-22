
import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Loader from 'react-loader-spinner';
import Button from '@material-ui/core/Button';
// import Button from 'react-bootstrap-button-loader';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      mobile: ''
    }
  }
  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    })  
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })  
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })  
  }
  onChangeMobile(e) {
    this.setState({
      mobile: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
        mobile: this.state.mobile
    };

    if(!obj.firstname || !obj.lastname || !obj.email || !obj.password || !obj.mobile) {
      swal('Whoa!', 'Missing Values!', 'error');
    }else{
      axios.post('http://localhost:4000/register/add', obj)
        .then(res => 
          // console.log('response from saved data', res.data)
          success(res.data)          
        );
    }

    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      mobile: ''
    })
      
    function success(dat){
      console.log('received data', dat);
      if(dat.code === 0) {
        swal('REGISTERED!', 'Registered successfully, Please check your email!', 'success');
      }else{
        swal('Whoa!', 'Error in saving the data!', 'error');
      }
    }
    
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Register</h3>
            <form onSubmit={this.onSubmit}>
            
                <div className="form-group">
                    <label>FIRST NAME:  </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.firstname}
                        onChange={this.onChangeFirstname}
                        />
                </div>
                <div className="form-group">
                    <label>LAST NAME:  </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.lastname}
                        onChange={this.onChangeLastname}
                        />
                </div>
                <div className="form-group">
                    <label>EMAIL:  </label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                </div>
                <div className="form-group">
                    <label>MOBILE:  </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.mobile}
                        onChange={this.onChangeMobile}
                        />
                </div>
                <div className="form-group">
                    <label>PASSWORD:  </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        />
                </div>
               
                
                <div className="row">
                <div className="col-md-12">
                    <input type="submit" style={{width: '100%'}} value="Register" className="btn btn-primary"/>
                </div>
                </div>
            </form>
            
        </div>
    )
  }
}