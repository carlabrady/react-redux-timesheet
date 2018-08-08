import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Good Morning',
      myActivities: ['Coding', 'laughing', 'playing with my Kids']
    };
  }
  addActivity() {
    this.setState(state => ({
      myActivities: state.myActivities
    }));
  }

  render() {
    return (
      <div className="hello">
        <h1>{this.state.greeting}, {this.props.friend}</h1>
        <input placeholder="Add Activity"/>
        <button onClick={this.addActivity}>Submit</button>
        <span/>
        <h1>My activities</h1>
        <ul>
          {this.state.myActivities.map(activity => <li key={activity}>{activity}</li>)}
        </ul>
      </div>
    );
  }
}

Hello.defaultProps = {
  friend: 'Carla B!!!'
};

export default Hello;