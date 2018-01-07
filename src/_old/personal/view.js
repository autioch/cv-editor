import React from 'react';
import './styles.scss';

export default function PersonalItemView({ personal: { name, value } }) {
  return (
    <li className="personal-item">
      <span className="personal-item__key">{name}</span>
      <span className="personal-item__value">{value}</span>
    </li>
  );
}
