import useSWR from 'swr';

/**
* Strings are passed to create a value that is used as a key to control the cached data in SWR. Hook attempts to grab all the data from an endpoint
* when no id is passed, but will cache a specific resource if a single id is provided.
*
*
* @param {string} endpoint - initial values used in the controlled form in a component
* @param {string} id - initial values used in the controlled form in a component
* @return {any} - Returns data array or isLoading & isError for while it fetches, and if it fails.
*/

export default function useData(endpoint = '', id = '') {
  const fetcher = async (url: string) => {
    const res = await fetch(url)
    if (!res.ok) {
      const error: any = new Error('An error occurred while fetching the data.')
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json()
  };

  //! switch this back when devving off locally hosted api
  // Builds the key that is piped to fetcher in the useSWR call.
  const apiURI = (!(process.env.NODE_ENV === 'development')) ? 'http://localhost:3333/api' : 'https://driver-assign-sppw9.ondigitalocean.app/api'
  const key = id ? `${apiURI}/${endpoint}/${id}` : `${apiURI}/${endpoint}`;
  const { data, error } = useSWR(key, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}