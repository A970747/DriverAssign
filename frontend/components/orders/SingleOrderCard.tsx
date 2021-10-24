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
  if (isError) return <p>Unable to load order data.</p>;
  return (
    <div className="flex justify-center p-6 border-2 rounded-md">
      <div className="flex flex-col gap-10 sm:flex-row items-center">
        <div className="relative xs:h-52 xs:w-52 sm:h-80 sm:w-80 bg-gray-500">
          <img src="https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="OpenLayers map here with route points" />
          <p className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-white bg-gray-500 rounded-xl p-2"> OSM map with polyline here</p>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col py-2 px-10 justify-items-center">
            <p className="text-xl">OrderID: {order.id}</p>
            <p className="text-xl">Org: {order.startCity}</p>
            <p className="text-xl">Dest: {order.endCity}</p>
            <Link href={`/drivers/${order.driver}`}>
              <a className="text-xl">Drvr: {order.driver || 'Unassigned'}</a>
            </Link>
            <p className="text-xl">PU: {format(new Date(order.startDate), 'dd/MM/yy HH:mm')}</p>
            <p className="text-xl">DEL: {format(new Date(order.endDate), 'dd/MM/yy HH:mm')}</p>
            <p className="text-xl">Dist: {order.distance}km</p>
            <p className="text-xl">Rev: $ {order.revenue}</p>
            <p className="text-xl">Cost: $ {order.cost}</p>
          </div>
          <div className="flex gap-x-2">
            <button className="border-2 border-gray-500 rounded-md w-full py-2 bg-gray-500 text-center text-white text-2xl hover:bg-gray-50 hover:text-gray-500" onClick={() => setEdit(!edit)}>Edit</button>
            <Link href={`/orders`}>
              <a className="border-2 border-gray-500 rounded-md bg-gray-500 py-2 w-full text-center text-white text-2xl hover:bg-gray-50 hover:text-gray-500">
                Back
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};