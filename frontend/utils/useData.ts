import useSWR from 'swr';

export default function useData(endpoint = '', id = '') {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const hostedApi = 'https://driver-assign-sppw9.ondigitalocean.app/api';
  const key = id ? `${hostedApi}/${endpoint}/${id}` : `${hostedApi}/${endpoint}`;
  const { data, error } = useSWR(key, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}


  //const localApi = 'http://localhost:3001';