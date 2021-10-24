import { UserIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Driver, Order } from '../interfaces';
import useData from '../utils/useData';
import useDropHelper from '../utils/useDropHelper';
import { DropCardOrder } from './orders/DropOrderCard';

/**
* Component calls the api to get all the drivers & order.
*
* Using Beautiful-DND, we create Droppable containers where drivers and orders will be mapped into Draggable items to be rendered.
* 
* The parent container, DragDropContext watches the dragging/dropping in the children containers, and passes data into the functions
* onDragEnd, onDragStart where we house the logic for what to do when one Draggable item is moved from one Droppable container to another.
*/

const Planning = () => {
  const drivers = useData('drivers');
  const orders = useData('orders');
  const { dropHelper, getDraggedItem } = useDropHelper();

  if (orders.isLoading || drivers.isLoading) return <p>Loading...</p>;
  if (orders.isError || drivers.isError) return <div>failed to load</div>;

  //todo The index here is an issue because it affects whether the package knows to shift stuff around in the container.
  return (
    <DragDropContext onDragEnd={dropHelper} onDragStart={getDraggedItem}>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 p-2 border-2 bg-gray-100 border-gray-400 rounded-md">
        <Droppable droppableId="unassigned">
          {
            (provided) => (
              <div className="flex flex-col gap-2 border-2 border-gray-300 bg-white p-2 rounded-md" ref={provided.innerRef} {...provided.droppableProps}>
                <span className="text-center text-2xl underline">Unassigned Orders</span>
                {
                  orders.data.filter((order: Order) => !order.driver).map((order: Order, index: number) => {
                    return <Draggable key={order.id} index={order.id} draggableId={order.id.toString()} >
                      {
                        (provided, snapshot) => (
                          <div className="border-2 hover:border-gray-300 bg-purple-50 hover:shadow rounded-md" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <DropCardOrder key={order.id} order={order} driver="Unassigned" />
                          </div>
                        )
                      }
                    </Draggable>;
                  })
                }
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>
        <div className="flex flex-col gap-2">
          <p className="text-center">Drag order to driver to assign:</p>
          {
            drivers.data.map((driver: Driver) => (
              <Droppable key={driver.id} droppableId={driver.id.toString()}>
                {
                  (provided) => (
                    <div className="flex-auto border-2 border-gray-300 bg-white p-2 rounded-md" ref={provided.innerRef} {...provided.droppableProps}>
                      <div className="flex justify-center items-center gap-2">
                        <p className="text-2xl text-center">{driver.firstName} {driver.lastName}</p>
                        <Link href={`/drivers/${driver.id}`}>
                          <a>
                            <UserIcon className="h-8 w-8 p-1 bg-white rounded-full border-2 hover:text-gray-500 hover:bg-gray-100 hover:border-gray-500" />
                          </a>
                        </Link>
                      </div>
                      <div className="flex flex-col gap-2 p-2">
                        {
                          orders.data.map((order: Order, index: number) => {
                            return (order.driver == driver.id) ?
                              <Draggable key={order.id} index={order.id} draggableId={order.id.toString()} >
                                {
                                  (provided, snapshot) => (
                                    <div className="border-2 hover:border-gray-300 bg-blue-50 hover:shadow rounded-md" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                      <DropCardOrder key={order.id} order={order} driver={driver.fullName} />
                                    </div>
                                  )
                                }
                              </Draggable> :
                              null;
                          })
                        }
                      </div>
                      {provided.placeholder}
                    </div>
                  )
                }
              </Droppable>
            ))
          }
        </div>
      </div>
    </DragDropContext >
  );
};

export default Planning;
