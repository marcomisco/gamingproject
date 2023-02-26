import styled from 'styled-components';

export function ReturnBtn() {
  const handleClick = () => {
    window.history.back();
  };

  return <Button onClick={handleClick}>X</Button>;
}

const Button = styled.button`
  padding: 5px 10px;
  height: 30px;
  cursor: pointer;
  border-radius: 12px;
   margin-left: 95% ;
  margin : 1%  2% 2% 95%;
  :hover {
    background-color: rgb(27,40,56); /* Green */
    color: white;
  }
`;
