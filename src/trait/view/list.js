import React from 'react';
import Item from './item'; // eslint-disable-line no-unused-vars

export default ({ trait, add }) => (
  <div>
    <ul>
      {trait.map((item) => <Item trait={item} key={item.id}/>)}
    </ul>
    <div onClick={add}>Add trait</div>
  </div>
);
