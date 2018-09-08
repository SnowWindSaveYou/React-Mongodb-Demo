import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';    // for ajax request

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      accountID:"",
      userName:"",
      password:""
    }
  }

  componentDidMount() {
    this._getUserList();
  }

  _getUserList(){
    const that = this;    // the 'this' in ajax is not this class, so save it to other value first
    axios.get('/api/m/getUserList/')
      .then(function (response) {
        console.log("res --getUserList: " + response.data);
        that.setState({ userList: response.data })
        console.log("userList: " + that.state.userList);  // use 'that' identify before rather than 'this'
      })
      .catch(function (err) {
        console.log("err --getUserList: " + err);
      });
  }

  renderUserList(){
    var userList =[]
    this.state.userList.forEach(function(user,index){
      userList.push(<tr key={"user"+index} >
        <td>ID: {user.id} </td>
        <td>Name: {user.name}</td>
      </tr>
    )})
    return userList
  }
  
  /** Use onChange to control the input
   * React control page by json file, it don't read actully rendered page
   * so, when we want to get user input, use onChange to refresh the state of react component
  */
  handleInputAccountOnChange(e) {
    this.setState({ accountID: e.target.value })
  }
  handleInputUserNameOnChange(e) {
    this.setState({ userName: e.target.value })
  }
  handleInputPasswordOnChange(e) {
    this.setState({ password: e.target.value })
  }

  handleRegisteSubmit(){
    let that = this;
    axios.post('/api/m/registeUser',{
      id:this.state.accountID,
      name:this.state.userName,
      password:this.state.password
    },{
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(function(res){
      if(res){
        that._getUserList();
      }
    }).catch(function(err){
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Example of connect to Mongodb</h1>
        </header>
        <div className="App-intro">
        <h3>User List</h3>
        <table>
          <tbody>
          {this.renderUserList()}
          </tbody>
        </table>    
        <div style={{margin:"20px"}}>
          <h3>Registe User Account</h3>
          <table>
            <tbody>
              <tr>
                <td>Account Number</td>
                <td><input value={this.state.accountID}
                  onChange={this.handleInputAccountOnChange.bind(this)}></input> </td>
              </tr>
              <tr>
                <td>User Name</td>
                <td><input value={this.state.userName}
                  onChange={this.handleInputUserNameOnChange.bind(this)}></input> </td>
              </tr>
              <tr>
                <td>Password</td>
                <td><input value={this.state.password}
                  onChange={this.handleInputPasswordOnChange.bind(this)}></input> </td>
              </tr>
              <tr><td><button onClick={()=>this.handleRegisteSubmit()}>Submit</button></td></tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
