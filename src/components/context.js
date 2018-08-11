import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();
export default Context;

const { Consumer } = Context;
export { Consumer };


export class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increaseCount = () => this.setState({ count: this.state.count + 1 });
    this.decreaseCount = () => this.setState({ count: this.state.count - 1 });
    this.resetCount = () => this.setState({ count: 0 });
  }

  render() {
    return (
      <Context.Provider value={{
        increaseCount: this.increaseCount,
        decreaseCount: this.decreaseCount,
        resetCount: this.resetCount,
      }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
