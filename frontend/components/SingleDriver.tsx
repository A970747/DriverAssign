import Link from 'next/link';
import { Driver } from '../interfaces';

type Props = {
  data: Driver
}

const SingleDriver = ({ data }: Props) => {
  /*   const handleClick = async (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this item?')) {
      const newData = swr?.data.filter((item) => item.id != data.id);
      swr.mutate(newData);
      await deleteOrder(data.id);
      swr.mutate();
    }
  }; */

  return (
    <div className="flex my-2 hover:shadow-md hover:bg-blue-50">
      <Link href={`/drivers/${data.id}`}>
        <a className="flex flex-col gap-2 border-2 border-gray-500 rounded p-2 md:grid md:grid-cols-10">
          <p className="justify-self-center"><span className="inline md:hidden">Driver: </span>{data.fullName}</p>
        </a>
      </Link>
    </div>
  );
};

export default SingleDriver;


