import Link from 'next/link';
import { Driver } from '../interfaces';

type Props = {
  driver: Driver
}

const DriverCard = ({ driver }: Props) => {
  /*   const handleClick = async (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this item?')) {
      const newDriver = swr?.driver.filter((item) => item.id != driver.id);
      swr.mutate(newdriver);
      await deleteOrder(driver.id);
      swr.mutate();
    }
  }; */

  return (
    <div className="flex my-2 hover:shadow-md hover:bg-blue-50">
      <Link href={`/drivers/${driver.id}`}>
        <a className="flex flex-col gap-2 border-2 border-gray-500 rounded p-2 md:grid md:grid-cols-10">
          <p className="justify-self-center"><span className="inline md:hidden">Driver: </span>{driver.fullName}</p>
        </a>
      </Link>
    </div>
  );
};

export default DriverCard;


