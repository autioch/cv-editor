import React from 'react';
import { connect } from 'react-redux';
import list from './list';
import { addTrait } from '../actions';
import './styles.scss';

const mapStateToProps = (state) => ({
  trait: state.trait
});

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addTrait())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(list);
