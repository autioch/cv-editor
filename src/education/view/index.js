import React from 'react';
import { connect } from 'react-redux';
import list from './list';
import { addEducation, removeEducation } from '../actions';
import './styles.scss';

const mapStateToProps = (state) => ({
  education: state.education
});

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addEducation()),
  remove: (id) => dispatch(removeEducation(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(list);
