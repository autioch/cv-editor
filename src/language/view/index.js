import React from 'react';
import { connect } from 'react-redux';
import list from './list';
import { addLanguage } from '../actions';
import './styles.scss';

const mapStateToProps = (state) => ({
  language: state.language
});

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addLanguage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(list);
