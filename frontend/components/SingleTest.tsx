import Link from 'next/link';
import useSWR from 'swr';
import { Order } from '../interfaces';
import { deleteOrder } from '../utils/orderService';

type Props = {
  data: Order
  cacheKey: string
}

const SingleTest = ({ data, cacheKey }: Props) => {
  const swr = useSWR(cacheKey);

  const handleClick = async (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this item?')) {
      const newData = swr?.data.filter((item) => item.id != data.id);
      swr.mutate(newData);
      await deleteOrder(data.id);
      swr.mutate();
    }
  };

  return (
    <div className="flex my-2 hover:shadow-md hover:bg-blue-50">
      <Link href={`/orders/${data.id}`}>
        <a className="flex flex-col gap-2 border-2 border-gray-500 rounded p-2 md:grid md:grid-cols-10">
          <p className="justify-self-center"><span className="inline md:hidden">OrderID: </span>{data.id}</p>
        </a>
      </Link>
      <button className="text-center" onClick={handleClick}>blah</button>
    </div>
  );
};

export default SingleTest;


