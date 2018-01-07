import React from 'react';
import Item from './item'; // eslint-disable-line no-unused-vars

export default ({ interest, add }) => (
  <div>
    <ul>
      {interest.map((item) => <Item interest={item} key={item.id}/>)}
    </ul>
    <div onClick={add}>Add interest</div>
  </div>
);
