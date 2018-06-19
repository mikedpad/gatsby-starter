import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './css/contentWrapper.module.scss';

class ContentWrapper extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentWrapper;
