import React from 'react';
import { connect } from 'react-redux';
import { setName, setTitle } from '../actions';
import view from './content';

import './styles.scss';

const mapStateToProps = (state) => ({
  name: state.header.name,
  title: state.header.title
});

const mapDispatchToProps = (dispatch) => ({
  onNameChange: (ev) => dispatch(setName(ev.target.value)),
  onTitleChange: (ev) => dispatch(setTitle(ev.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(view);
