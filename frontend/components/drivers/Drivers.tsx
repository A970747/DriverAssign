import { PlusIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Driver } from '../../interfaces';
import useData from '../../utils/useData';
import DriversCard from './DriversCard';

const Drivers = () => {
  const { data, isError, isLoading } = useData('drivers');

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <div className="flex justify-end">
        <Link href={`/drivers/create`}>
          <a className="flex items-center p-2 px-4 gap-2 text-xl rounded-xl border-2 hover:border-gray-500 hover:bg-gray-50 group">
            <PlusIcon className="h-6 w-6 bg-white hover:bg-gray-50 group-hover:bg-gray-50" />
            Create New Driver
          </a>
        </Link>
      </div>
      <div className="hidden sm:grid justify-start gap-2 border-b-2 border-black p-2">
        <p>Drivers</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        {
          data.map((driver: Driver) => <DriversCard key={driver.id} driver={driver} />)
        }
      </div>
      {
        (!isLoading && !isError && data.length == 0) ? <p className="flex justify-center py-6 text-2xl">No drivers, please create some!</p> : null
      }
    </div>
  );
};

export default Drivers;
