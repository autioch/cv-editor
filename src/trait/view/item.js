import React from 'react';

export default ({ trait: { id, name, proficiency } }) => (
  <li>
    <span>{name}</span>
    <span>{proficiency}</span>
  </li>
);
