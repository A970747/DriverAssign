import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Driver, Order } from '../interfaces';
import useData from '../utils/useData';
import useDropHelper from '../utils/useDropHelper';
import { DropCardOrder } from './DropCardOrder';

const Planning = () => {
  const drivers = useData('drivers');
  const orders = useData('orders');
  const { dropHelper } = useDropHelper();

  if (orders.isLoading) return <p>Orders still loading</p>;
  if (drivers.isLoading) return <p>okay</p>;
  return (
    <DragDropContext onDragEnd={dropHelper}>
      <div className="grid grid-cols-2 border-2 border-green-500">
        <Droppable droppableId="unassigned">
          {
            (provided) => (
              <div className="flex flex-col gap-2 border-2 border-red-500 p-2" ref={provided.innerRef} {...provided.droppableProps}>
                <span className="text-center">Unassigned Orders</span>
                {
                  orders.data.filter((order: Order) => !order.driver).map((order: Order, index: number) => {
                    return <Draggable key={order.id} index={index} draggableId={order.id.toString()} >
                      {
                        (provided, snapshot) => (
                          <div className="border-2 hover:border-gray-300 hover:shadow" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
        <div className="flex flex-col gap-2 justify-center border-2 border-blue-100">
          {
            drivers.data.map((driver: Driver) => (
              <Droppable key={driver.id} droppableId={driver.id.toString()}>
                {
                  (provided) => (
                    <div className="border-2 border-blue-500 flex-auto" ref={provided.innerRef} {...provided.droppableProps}>
                      <p className="text-xl text-center">{driver.firstName} {driver.id} Make these links to driver/[id]</p>
                      <div className="flex flex-col gap-2 p-2">
                        {
                          orders.data.map((order: Order, index: number) => {
                            return (order.driver == driver.id) ?
                              <Draggable key={order.id} index={index} draggableId={order.id.toString()} >
                                {
                                  (provided, snapshot) => (
                                    <div className="border-2 hover:border-gray-300 hover:shadow" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
