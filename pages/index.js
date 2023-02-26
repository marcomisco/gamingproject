import { useEffect, useRef, useState } from 'react';
//loader
import { Loading } from '../hooks/Loading';
import { Loader } from '../components/actions/Loader';
import { Header } from '../components/header/Header';
import { Pagination } from '../components/Pagination';
import { debounce } from '../utils/debounce';
import { Games } from '../components/Games';
import { Controls } from '../components/actions/Controls';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {  initialFilters } from '../utils/constants';
import { API_URL, KEY_URL } from '../utils/constants'
export default function Home({ initial }) {
  const router = useRouter();
  const { query } = router;

  const [filters, setFilters] = useState({
    page: query.page || initialFilters.page,
    search: query.search || initialFilters.search,
    ordering: query.ordering || initialFilters.ordering,
    platforms: query.platforms || initialFilters.platforms,
  });

  const [games, setGames] = useState(initial);
  const isMountRef = useRef(true);
  const isLoading = Loading();
  useEffect(() => {
    setGames(initial);
  }, [initial]);

  useEffect(() => {
    if (isMountRef.current) {
      isMountRef.current = false;
      return;
    }

    router.push({
      pathname: router.pathname,
      query: filters,
    });
  }, [filters]);

  return (
    <>
      <div class="container">
        <Head>
          <title>List of Video Games</title>
        </Head>
        <Header setFilters={debounce(setFilters, 500)} />
        <Controls filters={filters} setFilters={setFilters} />

{/* initialize loading */}
        {isLoading ? (
        <Loader />
      ) : (
        <Games games={games} setGames={setGames} />
      )}

      </div>
      <Pagination
        next={games.next}
        previous={games.previous}
        filters={filters}
        setFilters={setFilters}
      />
    </>
  );
}

export async function getServerSideProps({ query: initialQuery }) {
  try {
  const query = Object.entries(initialQuery).reduce((prev, [key, value]) => {
    return prev + `&${key}=${value}`;
  }, '');

  const response = await fetch(`${API_URL}${KEY_URL}${query}`);
  const initial = await response.json();

  return {
    props: { initial },
  };}
  catch  {
    console.log(err.message);
  }
}
