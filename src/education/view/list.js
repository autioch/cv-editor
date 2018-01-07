import React from 'react';
import Item from './item';

export default ({ education, add, remove }) => (
  <div>
    <ul>
      {education.map((item) => <Item education={item} remove={remove} key={item.id}/>)}
    </ul>
    <div onClick={add}>Add education</div>
  </div>
);
