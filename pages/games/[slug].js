import styled from 'styled-components';
import { BackBtn } from '../../components/actions/BackBtn';
import { ReturnBtn } from '../../components/actions/ReturnBtn';
import { GameInfo } from '../../components/gameComponents/GameInfo';
import { Slider } from '../../components/Slider';
import Head from 'next/head';
import { API_URL, KEY_URL } from '../../Utils/Constants';
export default function ({ game, screenshots }) {
  return (
    <>
      <Head>
        <title>{game.name}</title>
      </Head>
      
      <Container background_image={game.background_image}>
      <ReturnBtn/>
        <GameContainer>
      
          <h1>{game.name}</h1>
      
          <div>
            <Slider images={screenshots.results} />
          </div>
          <GameInfo game={game} />
          <BackBtn />
        </GameContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 2%;
  background-color: rgb(13,20,28);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;


  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: brightness(0.2);
    z-index: -1;
  }
`;

const GameContainer = styled.div`
  max-width: 800px;
  min-width: 300px;
 
  
`;



export async function getStaticProps({ params: { slug } }) {
  try {
    const gameResponse = await fetch(`${API_URL}/${slug}${KEY_URL}`);
    const game = await gameResponse.json();
    const screenshotsResponse = await fetch(`${API_URL}/${slug}/screenshots${KEY_URL}`);
    const screenshots = await screenshotsResponse.json();
    return {
      props: { game, screenshots },
    };
  } catch {
    console.log(err.message);
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
