import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Driver, Order } from '../interfaces';
import useData from '../utils/useData';

const Planning = () => {
  const drivers = useData('drivers');
  const orders = useData('orders');
  console.log(drivers.data, orders.data);

  function onDragEnd() {
    console.log('Drag ends');
  }

  if (orders.isLoading) return <p>Orders still loading</p>;
  if (drivers.isLoading) return <p>okay</p>;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-2 border-8 border-green-500">
        <Droppable droppableId="unassigned">
          {
            (provided) => (
              <div className="flex flex-col border-8 border-red-500" ref={provided.innerRef} {...provided.droppableProps}>
                <span className="text-center">Unassigned Orders</span>
                {
                  orders.data.map((order: Order, index: number) => {
                    return <Draggable key={order.id} draggableId={order.id.toString()} index={index}>
                      {
                        (provided, snapshot) => (
                          <div className="bg-red-50" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <p className="bg-red-50" key={order.id}>{order.id}</p>
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
        <div>
          {
            drivers.data.map((driver: Driver) => (
              <Droppable key={driver.id} droppableId={driver.id.toString()}>
                {
                  (provided) => (
                    <div className="border-8 border-blue-500" ref={provided.innerRef} {...provided.droppableProps}>
                      <p>{driver.firstName}</p>
                      {
                        orders.data.map((order: Order) => {
                          return (order.driver == driver.id) ? <p key={order.id}>{order.id}</p> : null;
                        })
                      }
                      {provided.placeholder}
                    </div>
                  )
                }
              </Droppable>
            ))
          }
        </div>
      </div>
    </DragDropContext>
  );
};

export default Planning;
