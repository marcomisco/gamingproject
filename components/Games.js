import styled from 'styled-components';
import { Card } from './gamecard/Card';

export function Games({ games }) {
  if (!games.results.length) {
    return <Container>
      <h1>No results found</h1>
       </Container>
  }

  return (
    <Container>
      {games.results.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  max-width: 1440px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  gap: 1%;
  padding: 1%;

  @media (min-width: 200px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 1440px;
    min-width : 1000px;
  }

  @media (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1440px;
  }
`;
