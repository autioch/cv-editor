import React from 'react';

export default ({ name, title, onNameChange, onTitleChange }) => ( // eslint-disable-line no-shadow
  <div>
    <input
      className="header__name"
      value={name}
      onChange={onNameChange}
      placeholder="Your name and surname"
    />
    <input
      className="header__title"
      value={title}
      onChange={onTitleChange}
      placeholder="Your title - designer, developer, engineer, architect"
    />
  </div>
);
