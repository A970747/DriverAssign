import { TrashIcon } from '@heroicons/react/outline';
import { format } from 'date-fns';
import Link from 'next/link';
import { Order } from '../../interfaces';
import { deleteOrder } from '../../utils/orderService';

type Props = {
  order: Order
}

const OrderCard = ({ order }: Props) => {
  function handleDelete() {
    if (confirm('Are you sure you want to delete this item?')) {
      deleteOrder(order.id).catch((err) => alert(err.message));
    }
  }

  return (
    <div className="my-2 hover:shadow-md hover:bg-gray-50">
      <div className="flex flex-col border-2 border-gray-500 rounded md:grid md:grid-cols-11">
        <Link href={`/orders/${order.id}`}>
          <a className="flex col-span-10 flex-col justify-items-center items-center gap-2  p-2 md:grid md:grid-cols-10">
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
        <button className="self-center justify-self-center py-2 sm:py-0" onClick={handleDelete}>
          <TrashIcon className="h-8 w-8 p-1 bg-white rounded-full border-2 hover:text-gray-500 hover:bg-gray-100 hover:border-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
