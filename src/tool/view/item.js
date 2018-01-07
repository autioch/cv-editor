import React from 'react';

const maxSkill = 5;

const MarkerView = ({ checked }) => ( // eslint-disable-line no-unused-vars
  <span className={`skill__value-marker${checked ? ' skill__value-marker---full' : ''}`}></span>
);

export default ({ name, level }) => { // eslint-disable-line no-shadow
  const markers = [];

  for (let index = 1; index <= maxSkill; index++) {
    markers.push(index <= level);
  }

  return (
    <li className="skill">
      <span className="skill__key">{name}</span>
      <span className={`skill__value skill__value--${level}`}>
        {markers.map((marker, index) => <MarkerView checked={marker} key={index}/>)}
      </span>
    </li>
  );
};
