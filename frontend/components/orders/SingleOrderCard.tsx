import format from 'date-fns/format';
import Link from 'next/link';
import useData from '../../utils/useData';

type Props = {
  id: string,
  edit: boolean,
  setEdit: any
}

export const SingleOrderCard = ({ id, edit, setEdit }: Props) => {
  const { data: order, isLoading, isError } = useData('orders', id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load</p>;
  return (
    <div>
      <div className="grid grid-cols-3 p-2 justify-items-center">
        <p>OrderID: {order.id}</p>
        <p>Org: {order.startCity}</p>
        <p>Dest: {order.endCity}</p>
        <Link href={`/drivers/${order.driver}`}>
          <a>Drvr: {order.driver || 'Unassigned'}</a>
        </Link>
        <p>PU: {format(new Date(order.startDate), 'dd/MM/yy HH:mm')}</p>
        <p>DEL: {format(new Date(order.endDate), 'dd/MM/yy HH:mm')}</p>
        <p>Dist: {order.distance}km</p>
        <p>Rev: {order.revenue}</p>
        <p>Cost: {order.cost}</p>
      </div>
      <button onClick={() => setEdit(!edit)}>Edit</button>
    </div>
  );
};