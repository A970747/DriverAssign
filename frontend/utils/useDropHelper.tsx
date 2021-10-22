import { useState } from 'react';
import { DragStart, DropResult } from 'react-beautiful-dnd';
import { updateOrder } from './orderService';
import useData from './useData';

type Return = {
  getDraggedItem: (arg: any) => void,
  dropHelper: (results: DropResult) => void,
}

export default function useDropHelper(): Return {
  const [droppedOrderId, setDroppedOrderId] = useState('');
  const { data: order } = useData('orders', droppedOrderId);

  function getDraggedItem(arg: DragStart) {
    setDroppedOrderId(arg.draggableId);
  }

  async function dropHelper(results: DropResult) {
    const { source, destination } = results;
    // Check source.droppableId against destination.droppableId, if they're not the same then put the destination.droppableId as driver value in order.
    //

    if (source.droppableId != destination.droppableId) {
      const updatedId = (destination.droppableId == 'unassigned') ? '' : parseInt(destination.droppableId);
      const updatedOrder = { ...order, driver: updatedId };

      try {
        console.log(order);
        const res = await updateOrder(order.id, updatedOrder);
        console.log({ res });
      } catch {
        console.log('something didnt go');
      }
    }

    //order is the actual order.
    //droppedOrderId is the order being dragged
    //use the destination to set the new driver id, pass that object to the update orders
  };

  return {
    getDraggedItem,
    dropHelper,
  };
}
