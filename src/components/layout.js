import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import styles from './css/layout.module.scss';
import './css/global.scss';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main className={styles.main}>
          {this.props.children}
        </main>
      </Fragment >
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
