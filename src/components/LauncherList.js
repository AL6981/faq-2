import React, { Component } from 'react';
import { Link } from 'react-router';

class LauncherList extends Component {
  constructor(props){
    super(props)
    this.state = {
      launchers: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/launchers')
    .then(response => response.json())
    .then(jsonresponse => {
      this.setState({launchers: jsonresponse})
    })
    }

  render(){
    let launcherList = this.state.launchers.map((launcher) => {
      return(
        <li key={launcher.id}>
          <Link to={`/launchers/${launcher.id}`}>{launcher.name} </Link>
        </li>
      )
    })

    return(
      <div>
        <ul>
          {launcherList}
        </ul>
      </div>
    )
  }
}

export default LauncherList;
