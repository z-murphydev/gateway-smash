import React from 'react';

interface Props {
  title: string;
  desc: string;
  value: string;
}

const Mission: React.FC<Props> = ({ title, desc, value }) => {
  return (
    <li>
      <strong>{title + ' '}</strong>
      {desc + ' '}
      {value}
    </li>
  );
};

export default Mission;
