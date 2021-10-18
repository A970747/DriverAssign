import Link from 'next/link';
import useSWR, { useSWRConfig } from 'swr';
import { Order } from '../interfaces';
import { deleteOrder } from '../utils/orderService';

type Props = {
  data: Order
  cache: string
}

const SingleTest = ({ data, cache }: Props) => {
  const { mutate } = useSWRConfig();
  const swr = useSWR(cache);

  const handleClick = async (e) => {
    e.preventDefault();
    const newData = swr?.data.filter((item) => item.id != data.id);
    mutate(cache, newData);
    await deleteOrder(data.id);
    mutate(cache);
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


