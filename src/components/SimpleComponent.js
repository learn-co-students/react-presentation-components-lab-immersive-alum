import React from 'react';

class SimpleComponent extends React.Component {
  constructor(){
    super()

    this.state = {
      mood: 'happy'
    }

    this.switchMood = this.switchMood.bind(this)
  }

  switchMood(){
    if (this.state.mood === 'happy') {
      this.setState({mood: 'sad'})
    } else {
      this.setState({mood: 'happy'})
    }
  }

  render(){
    return (
      <div onClick={this.switchMood}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent;
