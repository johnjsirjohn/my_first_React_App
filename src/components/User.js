import React, {Component} from 'react';

export default class User extends Component {
  state = {active: true};

  toggle = () => {
    this.setState ({
      active: !this.state.active,
    });
  };

  render () {
    return (
      <div>
        <h3>User: {this.props.username}</h3>
        <p>
          {this.props.username}
          {' '}
          is
          {' '}
          <b>{this.state.active ? '' : 'not'}</b>
          {' '}
          present
        </p>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}
