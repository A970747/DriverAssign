const baseUrl = 'http://localhost:3001/orders';

export const deleteOrder = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
};
