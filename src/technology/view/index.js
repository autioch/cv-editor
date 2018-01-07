import React from 'react';
import { connect } from 'react-redux';
import list from './list';
import { addTechnology } from '../actions';
import './styles.scss';

const mapStateToProps = (state) => ({
  technology: state.technology
});

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addTechnology())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(list);
