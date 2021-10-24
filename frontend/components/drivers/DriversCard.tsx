import Link from 'next/link';
import { Driver } from '../../interfaces';

type Props = {
  driver: Driver
}

const DriverCard = ({ driver }: Props) => {
  return (
    <div className="flex my-2">
      <Link href={`/drivers/${driver.id}`}>
        <a className="flex flex-col gap-2 border-2 border-gray-500 rounded p-2 md:grid md:grid-cols-10 hover:shadow-md hover:bg-blue-50">
          <p className="justify-self-center"><span className="inline md:hidden">Driver: </span>{driver.fullName}</p>
        </a>
      </Link>
    </div>
  );
};

export default DriverCard;


