import { mutate } from 'swr';
import { Order } from '../interfaces';

const baseUrl = ((process.env.NODE_ENV === 'development')) ? 'http://localhost:3333/api/orders' : 'https://driver-assign-sppw9.ondigitalocean.app/api/orders'

/**
* Handles the CRUD operations for all the order related API calls.
*
* Mutate is a SWR function that updates the cached values based on the key passed to it.
* My keying strategy isn't complete, so often I validate the entire path instead of a single item cached, eg ln 68 - 69.
*/



/**
* Input values don't want to have null values and numbers are kept as strings. This takes an object, converts it to an array, maps over to check for hard-coded properties
* that need to be NULL instead if '' or, converted back to a number from a string, and returns it as an objects with the same properties, but correct values.
*/

export const formatInputs = (orderInputs: any): Order => {
  const updatedInputsArray = Object.entries(orderInputs).map(entry => {
    let [key, value] = entry;
    if (["cost", "distance", "driver", "revenue"].includes(key)) value = (value === '') ? null : parseInt((value as any));
    return [key, value];
  })

  return Object.fromEntries(updatedInputsArray)
}

export const createOrder = async (order: Order) => {
  const res = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
  mutate(`${baseUrl}`);
  const data = await res.json();

  return data
};

export const updateOrder = async (id: number, updatedOrder: Order) => {
  mutate(`${baseUrl}/${id}`, () => ({ ...updatedOrder }), false);

  // Optimistically update the cached values in SWR with the updated data.
  mutate(`${baseUrl}`, ((data: Order[]) => {
    return data.map(order => {
      if (order.id == id) { return updatedOrder };
      return order;
    })
  }))

  const res = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedOrder),
  });

  mutate(`/${baseUrl}/${id}`);
  mutate(`${baseUrl}`);

  return res;
};

export const deleteOrder = async (id: number) => {
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
