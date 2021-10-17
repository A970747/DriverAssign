import { format } from 'date-fns';
import Link from 'next/link';
import { Order } from '../interfaces';

type Props = {
  data: Order
}

const SingleOrder = ({ data }: Props) => {
  return (
    <div className="my-2 hover:shadow-md hover:bg-blue-50">
      <Link href={`/orders/${data.id}`}>
        <a className="flex flex-col gap-2 border-2 border-gray-500 rounded p-2 md:grid md:grid-cols-10">
          <p className="justify-self-center"><span className="inline md:hidden">OrderID: </span>{data.id}</p>
          <p><span className="inline md:hidden">Driver: </span>{data.driverId || 'TBD'}</p>
          <p><span className="inline md:hidden">Start City: </span>{data.startCity}</p>
          <p><span className="inline md:hidden">End City: </span>{data.endCity}</p>
          <p><span className="inline md:hidden">Start Date: </span>{format(new Date(data.startDate), 'dd/MM/yy HH:mm')}</p>
          <p><span className="inline md:hidden">End Date: </span>{format(new Date(data.endDate), 'dd/MM/yy HH:mm')}</p>
          <p className="col-span-2"><span className="inline md:hidden">Description: </span>{data.description}</p>
          <p className="text-green-700"><span className="inline md:hidden">Revenue: </span>$ {data.revenue}</p>
          <p className="text-red-500"><span className="inline md:hidden">Cost: </span>$ {data.cost}</p>
        </a>
      </Link>
    </div>
  );
};

export default SingleOrder;
