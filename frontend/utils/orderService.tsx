import { mutate } from 'swr';
import { Order } from '../interfaces';

const baseUrl = 'http://localhost:3001/orders';


export const updateOrder = async (id: number, updatedOrder: Order) => {
  //const swr = useSWR(`${baseUrl}/${id}`);
  console.log(`${baseUrl}/${id}`);
  //mutate(`${baseUrl}/${id}`, updatedOrder, false);
  const res = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedOrder),
  });
  mutate(`${baseUrl}/${id}`);
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

  return res;
};
