import { Order } from '../interfaces';
import useData from '../utils/useData';
import SingleOrder from './SingleOrder';

const Orders = () => {
  //todo Add , { refreshInterval: 5 } to useSWR to get data refreshing every 5 seconds to simulate closer to real time.
  const { data, isError, isLoading } = useData('orders');

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <div className="hidden md:grid grid-cols-10 justify-around gap-2 border-b-2 border-black p-2">
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
          return <SingleOrder key={order.id} order={order} />;
        })
      }
    </div>
  );
};

export default Orders;
