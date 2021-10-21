import { useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import useData from './useData';

type Return = {
  setterino: (arg: any) => void,
  dropHelper: (results: DropResult) => void,
}

export default function useDropHelper(): Return {
  const [draggedId, setDraggedId] = useState('');
  const { data: order } = useData('orders', draggedId);

  //! rename this function used to test
  function setterino(arg: any) {
    console.log(arg);
    setDraggedId(arg.draggableId);
  }

  function dropHelper(results: DropResult): void {
    const { destination: { droppableId: driverId } } = results;
    console.log(driverId, typeof driverId);
    console.log(draggedId);
    console.log(order);
    //order is the actual order.
    //draggedId is the order being dragged
    //use the destination to set the new driver id, pass that object to the update orders
  };

  return {
    setterino,
    dropHelper,
  };
}
