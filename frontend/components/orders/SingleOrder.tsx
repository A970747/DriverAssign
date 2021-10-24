import { useState } from 'react';
import useData from '../../utils/useData';
import OrderHandler from './OrderHandler';
import { SingleOrderCard } from './SingleOrderCard';

type Props = {
  id: string
}

<<<<<<< HEAD
interface edit {
  edit: boolean
}

interface setEdit {
  success: boolean,
  message: string,
}

=======
>>>>>>> updates
export const SingleOrder = ({ id }: Props) => {
  const { data: order, isLoading, isError } = useData('orders', id);
  const [edit, setEdit] = useState(false)

<<<<<<< HEAD

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{isError}</p>;
=======
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Unable to load order data.</p>;
>>>>>>> updates
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