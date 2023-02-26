import { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/search-icon.svg';

export function Search({ handleChange }) {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
    handleChange(e);
  };

  return (
    <StyledLabel>
      <StyledInput
        value={value}
        type="text"
        placeholder="search a game"
        onChange={handleInputChange}
      ></StyledInput>
    </StyledLabel>
  );
}

const StyledLabel = styled.label`
  position: relative;
  width: 100%;
  margin-right: 5%;
 
  &::after {
    content: url('${searchIcon.src}');
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
  }
  @media (min-width: 200px) {
    width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 7px;
  padding-left: 40px;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
`;
