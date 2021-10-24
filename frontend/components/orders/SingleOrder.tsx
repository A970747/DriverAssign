import { useState } from 'react';
import useData from '../../utils/useData';
import OrderHandler from './OrderHandler';
import { SingleOrderCard } from './SingleOrderCard';

type Props = {
  id: string
}

export const SingleOrder = ({ id }: Props) => {
  const { data: order, isLoading, isError } = useData('orders', id);
  const [edit, setEdit] = useState(false)

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Unable to load order data.</p>;
  return (
    <div>
      {
        (edit)
          ? <OrderHandler order={order} action="update" setEdit={setEdit} />
          : <SingleOrderCard id={id} edit={edit} setEdit={setEdit} />
      }
    </div>
  );
};