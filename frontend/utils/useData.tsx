import useSWR from 'swr';

export default function useData(endpoint = '', id = '') {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const key = id ? `http://localhost:3001/${endpoint}/${id}` : `http://localhost:3001/${endpoint}`;
  const { data, error } = useSWR(key, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
