import React, { Component } from 'react';

class LauncherShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      launcher: {}
    }
  }

  componentDidMount(){
    let id = this.props.params.id
    debugger
    fetch(`/api/v1/launchers/${id}`)
    .then(response => response.json())
    .then(jsonresponse => {
      this.setState({launcher: jsonresponse})
    })
  }

  render(){
    return(
      <div>
        <h2>{this.state.launcher.name}</h2>
        <h2>{this.state.launcher.bio}</h2>
      </div>
    )
  }
}

export default LauncherShow;
