import { Order } from '../interfaces';

type Props = {
  order: Order
}

export const OrderCard = ({ order }: Props) => {
  return (
    <div className="grid grid-cols-3 p-2 gap-4 justify-items-center">
      <p>OrderID: {order.id}</p>
      <p>Org: {order.startCity}</p>
      <p>Dest: {order.endCity}</p>
      <p>Dist: {order.distance}km</p>
      <p>PU: {order.startDate}</p>
      <p>DEL: {order.endDate}</p>
      <p>Drvr: {order.driver || 'Unassigned'}</p>
      <p>Rev: {order.revenue}</p>
      <p>Cost: {order.cost}</p>
    </div>
  );
};
