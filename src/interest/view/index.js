import React from 'react';
import { connect } from 'react-redux';
import list from './list';
import { addInterest } from '../actions';
import './styles.scss';

const mapStateToProps = (state) => ({
  interest: state.interest
});

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addInterest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(list);
