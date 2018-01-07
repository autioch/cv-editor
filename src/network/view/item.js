import React from 'react';

export default ({ network: { name, value } }) => ( // eslint-disable-line no-shadow
  <li className="network-item">
    <span className="network-item__key">{name}</span>
    <span className="network-item__value">{value}</span>
  </li>
);
