import React from 'react';

export default ({ personal: { name, value } }) => ( // eslint-disable-line no-shadow
  <li className="personal-item">
    <span className="personal-item__key">{name}</span>
    <span className="personal-item__value">{value}</span>
  </li>
);
