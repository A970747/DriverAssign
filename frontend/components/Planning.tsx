// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import useData from '../utils/useData';


const Planning = () => {
  const drivers = useData('drivers');
  const orders = useData('orders');
  console.log({ drivers, orders });

  return (
    <p>This is a thing</p>
  );
};

export default Planning;
