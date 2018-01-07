import React from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize'; // eslint-disable-line no-unused-vars
import DatePicker from 'react-datepicker'; // eslint-disable-line no-unused-vars
import {
  removeEmployment,
  setEmploymentStartDate,
  setEmploymentEndDate,
  setEmploymentCompany,
  setEmploymentPosition,
  setEmploymentTools,
  setEmploymentSummary
} from '../actions';
import 'react-datepicker/dist/react-datepicker.css';

const mapStateToProps = (state, ownProps) => ({
  employment: state.employment.find((item) => item.id === ownProps.id)
});

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeEmployment(id)),
  setStartDate: (id, date) => dispatch(setEmploymentStartDate(id, date)),
  setEndDate: (id, date) => dispatch(setEmploymentEndDate(id, date)),
  setCompany: (id, text) => dispatch(setEmploymentCompany(id, text)),
  setPosition: (id, text) => dispatch(setEmploymentPosition(id, text)),
  setTools: (id, text) => dispatch(setEmploymentTools(id, text)),
  setSummary: (id, text) => dispatch(setEmploymentSummary(id, text))
});

const view = ({
  remove, setStartDate, setEndDate, setCompany, setPosition, setTools, setSummary,
  employment: { id, startDate, endDate, company, position, summary, tools }
}) => (
  <li className="employment__list-item">
    <section className="employment-item">
      <header className="employment-item__header">
        <div className="c-period">
          <input
            type="text"
            className="c-period__input"
            defaultValue={startDate}
            placeholder="2016-01-01"
            onChange={(ev) => setStartDate(id, ev.target.value)}
          />
          <span className="c-period__separator">-</span>
          <input
            type="text"
            className="c-period__input"
            defaultValue={endDate}
            placeholder="2018-12-31"
            onChange={(ev) => setEndDate(id, ev.target.value)}
          />
        </div>
        <input
          type="text"
          defaultValue={company}
          placeholder="Company name"
          onChange={(ev) => setCompany(id, ev.target.value)}
        />
        <span className="employment-item__period-separator">-</span>
        <input
          type="text"
          defaultValue={position}
          placeholder="Position"
          onChange={(ev) => setPosition(id, ev.target.value)}
        />
      </header>
      <section className="tools">
        <input
          type="text"
          defaultValue={tools.join(', ')}
          onChange={(ev) => setTools(id, ev.target.value)}
          placeholder="Line of tools used"
        />
      </section>
      <Textarea
        className="employment-item__summary"
        defaultValue={summary}
        placeholder="Description of the job in 2-3 lines  "
        onChange={(ev) => setSummary(id, ev.target.value)}
      />
    </section>
    <div className="c-action">
      <div className="c-action__button" onClick={() => remove(id)} title="Remove" >Remove</div>
    </div>
  </li>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(view);
