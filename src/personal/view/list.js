import React from 'react';
import Item from './item'; // eslint-disable-line no-unused-vars

export default ({ personal, add }) => (
  <div>
    <ul>
      {personal.map((item) => <Item personal={item} key={item.id}/>)}
    </ul>
    <div onClick={add}>Add personal</div>
  </div>
);
