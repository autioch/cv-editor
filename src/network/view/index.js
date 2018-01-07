import React from 'react';
import { connect } from 'react-redux';
import list from './list';
import { addNetwork } from '../actions';
import './styles.scss';

const mapStateToProps = (state) => ({
  network: state.network
});

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addNetwork())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(list);
