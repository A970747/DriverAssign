import { format } from 'date-fns';
import Link from 'next/link';
import { Order } from '../../interfaces';

type Props = {
  order: Order
}

const OrderCard = ({ order }: Props) => {
  return (
    <div className="my-2 hover:shadow-md hover:bg-blue-50">
      <Link href={`/orders/${order.id}`}>
        <a className="flex flex-col justify-items-center gap-2 border-2 border-gray-500 rounded p-2 md:grid md:grid-cols-10">
          <p><span className="inline md:hidden">OrderID: </span>{order.id}</p>
          <p><span className="inline md:hidden">Driver: </span>{order.driver || 'TBD'}</p>
          <p><span className="inline md:hidden">Start City: </span>{order.startCity}, {order.startProv}</p>
          <p><span className="inline md:hidden">End City: </span>{order.endCity}, {order.endProv}</p>
          <p><span className="inline md:hidden">Start Date: </span>{format(new Date(order.startDate), 'dd/MM/yy HH:mm')}</p>
          <p><span className="inline md:hidden">End Date: </span>{format(new Date(order.endDate), 'dd/MM/yy HH:mm')}</p>
          <p className="col-span-2"><span className="inline md:hidden">Description: </span>{order.description}</p>
          <p className="text-green-700"><span className="inline md:hidden">Revenue: </span>$ {order.revenue}</p>
          <p className="text-red-500"><span className="inline md:hidden">Cost: </span>$ {order.cost}</p>
        </a>
      </Link>
    </div>
  );
};

export default OrderCard;
