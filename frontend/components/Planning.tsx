import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Driver } from '../interfaces';
import useData from '../utils/useData';

const Planning = () => {
  const drivers = useData('drivers');
  const orders = useData('orders');
  console.log(drivers.data, orders.data);

  function onDragEnd() {
    console.log('Drag ends');
  }

  if (drivers.isLoading) return <p>okay</p>;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="unassigned">
          {
            (provided) => (
              <div className="h-10 w-10 border-8 border-red-500" ref={provided.innerRef} {...provided.droppableProps}>
                <p>DRIVER</p>
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>;
        {
          drivers.data.map((driver: Driver) => {
            <Droppable droppableId={driver.id.toString()}>
              {
                (provided) => (
                  <div className="h-10 w-10 border-8 border-red-500" ref={provided.innerRef} {...provided.droppableProps}>
                    <p>DRIVER</p>
                    {provided.placeholder}
                  </div>
                )
              }
            </Droppable>;
          })
        }
      </div>
    </DragDropContext>
  );
};

export default Planning;
