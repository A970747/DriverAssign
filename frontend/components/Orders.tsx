import useSWR from 'swr';
import SingleOrder from './SingleOrder';

// Fetches from API, NextJS autmatically polyfills the fetch function.
const fetcher = (url) => fetch(url).then((res) => res.json());

const Orders = () => {
  //todo Add , { refreshInterval: 5 } to useSWR to get data refreshing every 5 seconds to simulate closer to real time.
  const { data, error } = useSWR('http://localhost:3001/orders', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log('orders', data);
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
        data.map((order) => {
          return <SingleOrder key={order.id} data={order} />;
        })
      }
    </div>
  );
};

export default Orders;
