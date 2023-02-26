import { Sort } from './Sort';
import styled from 'styled-components';

export function Controls({ filters, setFilters }) {
  return (
    <Container>
      <StyledDiv>
        <Sort filters={filters} setFilters={setFilters} />
      </StyledDiv>
    </Container>
  );
}

const Container = styled.div`
  margin-left: auto;
  padding: 5px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  max-width : 1440px;
  margin-left: auto;
  margin-right: auto;


`;

const StyledDiv = styled.div`
  display: flex;

`;
