import { PlusIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Order, reducerTotals } from '../../interfaces';
import useData from '../../utils/useData';
import OrderCard from './OrderCard';

const Orders = () => {
  //todo Add , { refreshInterval: 5 } to useSWR to get data refreshing every 5 seconds to simulate closer to real time.
  const { data, isError, isLoading } = useData('orders');

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const totals = data.reduce((prev: reducerTotals, curr: Order, i: number): reducerTotals => {
    prev.totalRev = prev.totalRev + (curr.revenue) ? curr.revenue : 0;
    prev.totalCost = prev.totalCost + (curr.cost) ? curr.cost : 0;
    return prev;
  }, { totalRev: 0, totalCost: 0 })

  return (
    <div>
      <div className="flex justify-end">
        <Link href={`/orders/create`}>
          <a className="flex items-center p-2 px-4 gap-2 text-xl rounded-xl border-2 hover:border-gray-500 hover:bg-gray-50 group">
            <PlusIcon className="h-6 w-6 bg-white hover:bg-gray-50 group-hover:bg-gray-50" />
            Create New Order
          </a>
        </Link>
      </div>
      <div className="hidden md:grid grid-cols-11 justify-items-center gap-2 border-b-2 border-black p-2">
        <p className="justify-self-center">OrderID</p>
        <p>DriverID</p>
        <p>Start City</p>
        <p>End City</p>
        <p>Start Date</p>
        <p>End Date</p>
        <p className="col-span-2">Description</p>
        <p>Revenue</p>
        <p>Cost</p>
      </div>
      {
        data.map((order: Order) => {
          return <OrderCard key={order.id} order={order} />;
        })
      }
      {
        (!isLoading && !isError && data.length == 0) ? <p className="flex justify-center py-6 text-2xl">No orders, please create some!</p> : null
      }
      <div className="hidden md:grid grid-cols-11 justify-items-center gap-2 border-t-2 border-black p-2">
        <p>Totals: </p>
        <p className="col-start-9 text-green-700">$ {totals.totalRev}</p>
        <p className="col-start-10 text-red-500">$ {totals.totalCost}</p>
      </div>

    </div>
  );
};

export default Orders;
