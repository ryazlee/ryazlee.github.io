import React from 'react';

const Link = ({ source, name }) => (
  <a className="link" href={source}>{name}</a>
);

export default Link;
