import React from 'react';
import Item from './item'; // eslint-disable-line no-unused-vars

export default ({ language, add }) => (
  <div>
    <ul>
      {language.map((item) => <Item language={item} key={item.id}/>)}
    </ul>
    <div onClick={add}>Add language</div>
  </div>
);
