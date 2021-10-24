import { Driver } from '../../interfaces';
import useData from '../../utils/useData';
import SingleDriver from './DriversCard';

const Drivers = () => {
  const { data, isError, isLoading } = useData('drivers');
  console.log(data);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <div className="hidden md:grid grid-cols-10 justify-around gap-2 border-b-2 border-black p-2">
        <p>Drivers</p>
      </div>
      {
        data.map((driver: Driver) => <SingleDriver key={driver.id} driver={driver} />)
      }
    </div>
  );
};

export default Drivers;
