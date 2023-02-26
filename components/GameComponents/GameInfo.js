import styled from 'styled-components';
import { Item } from './Item';

export function GameInfo({ game }) {
  return (
    <Container>
      <Item
        title={'Platforms'}
        value={game.platforms?.map((item) => item?.platform?.name).join(', ')}
      />

      <Item title={'Rating'} value={game.metacritic} />

      {/* <Item title={'Genres'} value={game.genres?.map((genre) => genre?.name).join(', ')} />

      <Item title={'Release date'} value={game.released} /> */}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
