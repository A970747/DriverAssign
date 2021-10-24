import { mutate } from 'swr';
import { Order } from '../interfaces';

const baseUrl = 'https://order-api.mattjackson.dev/api/orders';

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

  const res = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedOrder),
  });

  mutate(`${baseUrl}/${id}`);

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
