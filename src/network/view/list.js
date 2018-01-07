import React from 'react';
import Item from './item'; // eslint-disable-line no-unused-vars

export default ({ network, add }) => (
  <div>
    <ul>
      {network.map((item) => <Item network={item} key={item.id}/>)}
    </ul>
    <div onClick={add}>Add network</div>
  </div>
);
