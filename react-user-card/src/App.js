import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import {Container} from 'shards-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      MyData:null,
      Data:null,
    }
  }
  componentDidMount(){
    this.fetchData();
    this.fetchMyData();
  }
  fetchMyData=()=>{
    fetch('https://api.github.com/users/Gorillabuds')
      .then(res => {
        return res.json()
      })
      .then(data => {
        return this.setState({ MyData: data})
      })
      .catch(err => console.log(err))
  }
  fetchData=()=>{
    fetch('https://api.github.com/users/Gorillabuds/followers')
    .then(res => {
      return res.json()
    })
    .then(data => {
      return this.setState({ Data: data })
    })
    .catch(err => console.log(err))
  }
  render(){
    return(
      <div>
        <Header/>
        {!this.state.Data && <h1 className="loader">Users Loading..</h1>}
        <Container className="card-container">
        {console.log(this.state.MyData)}
        {console.log(this.state.Data)}
        {this.state.MyData
        &&
          <Card
            key={this.state.MyData.id}
            username={this.state.MyData.login}
            img={this.state.MyData.avatar_url}
            repos={this.state.MyData.html_url}
          />
        }
        {this.state.Data     
        &&
        this.state.Data.map(userData => (
          <Card
            key={userData.id}
            username={userData.login}
            img={userData.avatar_url}
            repos={userData.html_url}
          />
        ))
        }
        </Container>
      </div>
    );
  }
}
export default App;