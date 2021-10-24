import { TrashIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Driver } from '../../interfaces';
import { deleteDriver } from '../../utils/driverService ';

type Props = {
  driver: Driver
}

const DriverCard = ({ driver }: Props) => {
  function handleDelete() {
    if (confirm('Are you sure you want to delete this item?')) {
      deleteDriver(driver.id).catch((err) => alert(err.message));
    }
  }

  return (
    <div className="flex border-2 border-gray-500 rounded my-2">
      <Link href={`/drivers/${driver.id}`}>
        <a className="flex gap-2 border-2 items-center text-2xl p-2 hover:shadow-md hover:bg-gray-50">
          <img className="rounded-full max-h-24 border-2" src="https://i.pravatar.cc/300" alt="Random driver avatar" />
          <p className="justify-self-center">{driver.fullName}</p>
        </a>
      </Link>
      <button className="justify-self-center" onClick={handleDelete}>
        <TrashIcon className="mx-4 h-8 w-8 p-1 bg-white rounded-full border-2 hover:text-gray-500 hover:bg-gray-100 hover:border-gray-500" />
      </button>
    </div>
  );
};

export default DriverCard;
