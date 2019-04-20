import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import _ from 'lodash';

// import Create from './gender/create.component';
// import GenderCreate from '..../components/gender/create.component';

export default class Userindex extends Component {

  constructor(props) {
      super(props);
      this.state = {user: []};
      this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
      let path = '/users/create';
      this.props.history.push(path);
    }

    componentDidMount(){
      axios.get('http://localhost:4000/register')
        .then(response => {
            console.log(response.data);
            this.setState({ user: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    tabRow(){
      return this.state.user.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      console.log('cheki index wewe', this.state.user.length)
      console.log('cheki index wewe lodash', _.size(this.state.user))
      if(_.size(this.state.user) > 0){
        return (
          <div>
            <button onClick={this.routeChange} type="submit" style={{width: '100%'}} className="btn btn-primary">Create New Gender</button>
            
            <h3 align="center">users List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Mobile</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
              <tbody>
                { this.tabRow() }
              </tbody>
            </table>
          </div>
        );
      }else{
        return (
            <div className="row">
                    <div className="col-md-5"></div>
                    <div className="col-md-2">
                    <span style={{float: 'centre'}}>
                    <Loader 
                        type="Oval"
                        color="#00BFFF"
                        height="100"	
                        width="100"
                    />
                    </span></div>
                <div className="col-md-5"></div>
            </div>
         
            );
        }
      
        }
    
  }