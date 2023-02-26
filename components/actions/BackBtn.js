import styled from 'styled-components';

export function BackBtn() {
  const handleClick = () => {
    window.history.back();
  };

  return <Button onClick={handleClick}>Close</Button>;
}

const Button = styled.button`

  appearance: none;
  backface-visibility: hidden;
  background-color: white;
  border-radius: 10px;
  border-style: none;
  box-shadow: none;
  box-sizing: border-box;
  color: rgb(27,40,56);
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 50px; 
  width: 100%;
  padding: 2%;
  margin: 2%;
  position: relative;
  
}

:hover {
  background-color: rgb(27,40,56); /* Green */
  color: white;
}


@media (min-width: 768px) {
  .button-65 {
    padding: 14px 22px;
    width: 176px;
  }
}
  
`;
