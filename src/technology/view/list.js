import React from 'react';
import Item from './item';

export default ({ technology, add }) => (
  <div>
    <ul className="skills__list">
      {technology.map((item) => <Item name={item.name} level={item.level} key={item.id} />)}
    </ul>
    <div onClick={add}>Add technology</div>
  </div>
);
