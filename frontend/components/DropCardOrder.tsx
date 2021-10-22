import format from 'date-fns/format';
import { Order } from '../interfaces';

type Props = {
  order: Order,
  driver: string
}

export const DropCardOrder = ({ order, driver }: Props) => {
  const startDate = format(new Date(order.startDate), 'dd/MM/yy');
  const startTime = format(new Date(order.startDate), 'HH:mm');
  const endDate = format(new Date(order.endDate), 'dd/MM/yy');
  const endTime = format(new Date(order.endDate), 'HH:mm');

  return (
    <div className="grid grid-cols-3 p-2 justify-items-center">
      <p>OrderID: {order.id}</p>
      <p>Org: {order.startCity}</p>
      <p>Dest: {order.endCity}</p>
      <p>Drvr: {driver || 'Unassigned'}</p>
      <p>PU: {startDate} {startTime}</p>
      <p>DEL: {endDate} {endTime}</p>
      <p>Dist: {order.distance}km</p>
      <p>Rev: {order.revenue}</p>
      <p>Cost: {order.cost}</p>
    </div>
  );
};
