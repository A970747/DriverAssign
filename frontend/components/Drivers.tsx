import useSWR from 'swr';
import SingleTest from './SingleTest';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Drivers = () => {
  const cacheKey = 'http://localhost:3001/drivers';
  const { data, error } = useSWR('http://localhost:3001/drivers', fetcher);
  console.log(data, error);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
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
        data.map((driver) => <SingleTest key={driver.id} data={driver} cache={cacheKey} />)
        /*         data ?

          : <p>not yet</p> */
      }
    </div>
  );
};

export default Drivers;
