import React from 'react';

export default ({ remove, education: { id, startDate, endDate, institution, city, country } }) => (
  <li className="education__list-item">
    <section className="education-item__period">
      <span>{startDate}</span>
      <span className="education-item__period-separator">-</span>
      <span>{endDate}</span>
    </section>
    <div>
      <span className="education__city">{city}</span>
      <span className="education__country">{country}</span>
    </div>
    <div>{institution}</div>
    <button onClick={() => remove(id)} >Remove</button>
  </li>
);
