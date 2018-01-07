import React from 'react';

export default ({ language: { id, name, proficiency } }) => (
  <li>
    <span>{name}</span>
    <span>{proficiency}</span>
  </li>
);
