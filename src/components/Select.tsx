import React from 'react';
import styled from '@emotion/styled';
import { FC } from 'react';

const Root = styled.select`
  height: 30px;
  margin: auto 20px;
`;

interface IButton {
  onSelect?: (level: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Select: FC<IButton> = ({ onSelect }) => {
  return (
    <Root role="select" name="select" onChange={onSelect}>
      <option value="1" defaultValue="1">
        Падаван
      </option>
      <option value="2">Джедай</option>
      <option value="3">Мастер-джедай</option>
      <option value="4">Член Совета Силы</option>
    </Root>
  );
};

export default Select;
