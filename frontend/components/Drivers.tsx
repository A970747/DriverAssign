import useData from '../utils/useData';
import SingleTest from './SingleDriver';

const Drivers = () => {
  const { data, isError, isLoading } = useData('drivers');;

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <div className="hidden md:grid grid-cols-10 justify-around gap-2 border-b-2 border-black p-2">
        <p>Drivers</p>
      </div>
      {
        data.map((driver) => <SingleTest key={driver.id} data={driver} />)
      }
    </div>
  );
};

export default Drivers;
