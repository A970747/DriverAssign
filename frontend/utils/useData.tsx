import useSWR from 'swr';

export default function useData(endpoint = '', id = '') {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const hostedApi = 'https://driver-assign-sppw9.ondigitalocean.app/api';
  const localApi = 'http://localhost:3001';
  const key = id ? `${hostedApi}/${endpoint}/${id}` : `${hostedApi}/${endpoint}`;
  console.log(key);
  const { data, error } = useSWR(key, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
