import { mutate } from 'swr';
import { Driver } from '../interfaces';

const baseUrl = ((process.env.NODE_ENV === 'development')) ? 'http://localhost:3333/api/drivers' : 'https://driver-assign-sppw9.ondigitalocean.app/api/drivers'

/**
* Handles the CRUD operations for all the order related API calls.
*
* Mutate is a SWR function that updates the cached values based on the key passed to it.
* My keying strategy isn't complete, so often I validate the entire path instead of a single item cached, eg ln 68 - 69.
*/

export const createDriver = async (driver: Driver) => {
  const res = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(driver),
  });
  mutate(`${baseUrl}`);
  const data = await res.json();

  return data
};

export const updateDriver = async (id: number, updatedDriver: Driver) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedDriver),
  });

  mutate(`/${baseUrl}/${id}`);
  mutate(`${baseUrl}`);

  return res;
};

export const deleteDriver = async (id: number) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  mutate(`/${baseUrl}/${id}`);
  mutate(`${baseUrl}`);

  return res;
};
