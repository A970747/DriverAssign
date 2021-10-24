import { useState } from 'react';
import { DragStart, DropResult } from 'react-beautiful-dnd';
import { updateOrder } from './orderService';
import useData from './useData';

export default function useDropHelper() {
  const [droppedOrderId, setDroppedOrderId] = useState('');
  const { data: order, isError } = useData('orders', droppedOrderId);


  /**
  * Utilizes the onDragStart method of beautiful-DND to provide info on the item being moved. We use this information to set the items
  * ID into state, so we can use our order hook to fetch or use the cache for order data. 
  *
  * todo -> If order info is available in the getDraggedItem we should set it to state and use that to update, instead of using data.
  *
  * @param {DragStart} arg - Gives us the order info of the dragged item.
  * @return {void}
  */
  function getDraggedItem(arg: DragStart): void {
    setDroppedOrderId(arg.draggableId);
  }

  /**
  * Function checks is the container an item is moved into is different than where it originated.
  * If the item has moved containers, and we have the item data from the useData hook, we call
  * a function updateOrder to pass the updated order data to the API and optimistically update it.
  * If that data doesn't exist it will throw an error.
  * 
  * todo -> Currently nothing shown to use if update fails other than item snapping back. Needs a notification.
  *
  * @param {DropResult} results - Provides the Id & Index of the item being moved, and the container it is moved into.
  * @return {Promise<void>}
  */
  async function dropHelper(results: DropResult): Promise<void> {
    const { source, destination } = results;

    if (source.droppableId != destination.droppableId && !isError) {
      const updatedId = (destination.droppableId == 'unassigned') ? null : parseInt(destination.droppableId);
      const updatedOrder = { ...order, driver: updatedId };

      await updateOrder(order.id, updatedOrder);
    } else {
      throw new Error('Error getting data for order')
    }
  };

  return {
    getDraggedItem,
    dropHelper,
  };
}
