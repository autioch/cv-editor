import React from 'react';
import { connect } from 'react-redux';
import view from './content';
import './styles.scss';

const mapStateToProps = (state) => ({
  portrait: state.portrait
});

export default connect(
  mapStateToProps
)(view);
