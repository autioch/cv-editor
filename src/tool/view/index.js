import React from 'react';
import { connect } from 'react-redux';
import list from './list';
import { addTool } from '../actions';
import './styles.scss';

const mapStateToProps = (state) => ({
  tool: state.tool
});

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addTool())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(list);
