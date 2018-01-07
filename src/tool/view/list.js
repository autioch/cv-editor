import React from 'react';
import Item from './item';

export default ({ tool, add }) => (
  <div>
    <ul className="skills__list">
      {tool.map((item) => <Item name={item.name} level={item.level} key={item.id} />)}
    </ul>
    <div onClick={add}>Add tool</div>
  </div>
);
