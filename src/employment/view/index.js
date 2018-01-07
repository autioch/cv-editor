import React from 'react';
import { connect } from 'react-redux';
import Item from './item'; // eslint-disable-line no-unused-vars
import { addEmployment } from '../actions';
import './styles.scss';

const mapStateToProps = (state) => ({
  employment: state.employment
});

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addEmployment())
});

const view = ({ employment, add }) => (
  <div>
    <ul>
      {employment.map((item) => <Item id={item.id} key={item.id}/>)}
    </ul>
    <div onClick={add}>Add employment</div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(view);
