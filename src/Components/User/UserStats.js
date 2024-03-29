import React, { lazy } from 'react'
import useFetch from '../../Hooks/useFetch'
import Head from '../Helper/Head'
import { GET_STATS } from '../../Api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if(loading) return <Loading />
  if(error) return <Error error={error} />
  if(data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" description="Página destinada a estatísticas." />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  } else return null;
}

export default UserStats
 