import format from "date-fns/format";
import Router from "next/router";
import { SyntheticEvent, useState } from "react";
import { Order } from "../../interfaces";
import { createOrder, formatInputs, updateOrder } from "../../utils/orderService";
import useForm from "../../utils/useForm";

type Props = {
  order?: Order
  action: string,
  setEdit?: (edit: boolean) => void
}

const orderFields: any = {
  description: '',
  cost: '',
  distance: '',
  driver: '',
  endCity: '',
  endProv: '',
  endCountry: '',
  endDate: '',
  revenue: '',
  startCity: '',
  startProv: '',
  startCountry: '',
  startDate: '',
  id: null
}

function formatDateTimeInput(order: Order) {
  if (order.startDate && order.endDate) {
    return {
      ...order,
      startDate: format(new Date(order.startDate), 'yyyy-MM-dd\'T\'HH:mm'),
      endDate: format(new Date(order.endDate), 'yyyy-MM-dd\'T\'HH:mm')
    }
  }

  return order;
}

export default function OrderHandler({ order = orderFields, action, setEdit }: Props) {
  order = formatDateTimeInput(order);
  const { id, ...orderNoId } = order;
  const { inputs, setInputs, handleChange } = useForm(orderNoId);
  const [inFlight, setInFlight] = useState(false);

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    switch (action) {
      case "create":
        setInFlight(true);
        setInputs(formatInputs(inputs));
        try {
          const res = await createOrder(inputs);
          Router.push({
            pathname: `/orders/${res.id}`,
          });
        } catch (e) {
          setInFlight(false);
          console.error('Malformed request', e);
        }
        break;
      case "update":
        setInFlight(true);
        setInputs(formatInputs(inputs));
        try {
          await updateOrder(id, inputs);
<<<<<<< HEAD
          console.log(inputs);
=======
>>>>>>> updates
          setInFlight(false);
          setEdit(false);
        } catch (e) {
          setInFlight(false);
          console.error('Malformed request', e);
        }
        break;
      default:
        console.log("Unexpected form action. Action must be create or update")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <fieldset disabled={inFlight} className="grid grid-cols-3 p-2 gap-2  border-4 bg-blue-50">
          <div>
            <span>OrderID: {id} </span>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="startCity">
              Start city:
              <input
                required
                className="ml-1"
                id="startCity"
                name="startCity"
                type="text"
                placeholder="Enter start city"
                value={inputs.startCity}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="startProv">
              Start prov:
              <input
                required
                className="ml-1"
                id="startProv"
                name="startProv"
                type="text"
                placeholder="Enter start province"
                value={inputs.startProv}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="startCountry">
              Start country:
              <input
                required
                className="ml-1"
                id="startCountry"
                name="startCountry"
                type="text"
                placeholder="Enter start country"
                value={inputs.startCountry}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="endCity">
              End city:
              <input
                required
                className="ml-1"
                id="endCity"
                name="endCity"
                type="text"
                placeholder="Enter end city"
                value={inputs.endCity}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="endProv">
              End prov:
              <input
                required
                className="ml-1"
                id="endProv"
                name="endProv"
                type="text"
                placeholder="Enter end province"
                value={inputs.endProv}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="endCountry">
              End country:
              <input
                required
                className="ml-1"
                id="endCountry"
                name="endCountry"
                type="text"
                placeholder="Enter end country"
                value={inputs.endCountry}
                onChange={handleChange}
              />
            </label>
          </div>
          <label htmlFor="driver">
            Driver:
            <input
              className="ml-1"
              id="driver"
              name="driver"
              type="number"
              placeholder="Please enter the driver ID"
              value={inputs.driver}
              onChange={handleChange}
              pattern="/^[0-9]{1,8}$|^$/"
            />
          </label>
          <label htmlFor="startDate">
            Start Date:
            <input
              required
              className="ml-1"
              id="startDate"
              name="startDate"
              type="datetime-local"
              placeholder="Please enter start date"
              value={inputs.startDate}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="endDate">
            End Date:
            <input
              required
              className="ml-1"
              id="endDate"
              name="endDate"
              type="datetime-local"
              placeholder="Please enter end date"
              value={inputs.endDate}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            Description:
            <input
              className="ml-1"
              id="description"
              name="description"
              type="text"
              placeholder="Enter description"
              value={inputs.description}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="revenue">
            Revenue:
            <input
              className="ml-1"
              id="revenue"
              name="revenue"
              type="number"
              placeholder="Enter revenue"
              value={inputs.revenue}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="cost">
            Cost:
            <input
              className="ml-1"
              id="cost"
              name="cost"
              type="number"
              placeholder="Please enter cost"
              value={inputs.cost}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="distance">
            Distance:
            <input
              className="ml-1"
              id="distance"
              name="distance"
              type="number"
              placeholder="Enter distance"
              value={inputs.distance}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <button type="submit">{action}</button>
      </form>
    </div>
  );
}