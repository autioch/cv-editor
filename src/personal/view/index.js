import React from 'react';
import { connect } from 'react-redux';
import list from './list';
import { addPersonal } from '../actions';
import './styles.scss';

const mapStateToProps = (state) => ({
  personal: state.personal
});

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addPersonal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(list);
