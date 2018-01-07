import React from 'react';

export default function PersonalItemView({ profile: { network, url } }) {
  return (
    <li className="personal-item">
      <span className="personal-item__key">{network}</span>
      <span className="personal-item__value">
        <a href={`//${url}`}>{url}</a>
      </span>
    </li>
  );
}
