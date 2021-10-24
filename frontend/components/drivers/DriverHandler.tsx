import Link from 'next/link';
import Router from "next/router";
import { SyntheticEvent, useState } from "react";
import { Driver } from "../../interfaces";
import { createDriver, updateDriver } from "../../utils/driverService ";
import useForm from "../../utils/useForm";

type Props = {
  driver?: Driver
  action: string,
  setEdit?: (edit: boolean) => void
}

const driverFields: Driver = {
  firstName: '',
  lastName: '',
  fullName: '',
}

export default function DriverHandler({ driver = driverFields, action, setEdit }: Props) {
  const { id, ...driverNoId } = driver;
  const { inputs, handleChange } = useForm(driverNoId);
  const [inFlight, setInFlight] = useState(false);

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const driverFields = {
      ...inputs,
      fullName: `${inputs.firstName} ${inputs.lastName}`
    }

    switch (action) {
      case "create":
        setInFlight(true);
        try {
          const res = await createDriver(driverFields);
          Router.push({
            pathname: `/drivers/${res.id}`,
          });
        } catch (e) {
          setInFlight(false);
          console.error('Malformed request', e);
        }
        break;
      case "update":
        setInFlight(true);
        try {
          await updateDriver(id, driverFields);
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
        <fieldset disabled={inFlight} className="grid grid-cols-3 p-2 gap-2  bdriver-4 bg-gray-50 rounded-md">
          <div>
            <span>DriverID: {id} </span>
          </div>
          <label htmlFor="firstName">
            First Name:
            <input
              required
              className="ml-1"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter start city"
              value={inputs.firstName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="lastName">
            Last Name:
            <input
              required
              className="ml-1"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter start province"
              value={inputs.lastName}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <div className="flex gap-2">
          <button className="capitalize bdriver-2 bdriver-gray-500 rounded-md bg-gray-500 py-2 w-full text-center text-white text-2xl hover:bg-gray-50 hover:text-gray-500" type="submit">{action}</button>
          <Link href={(driver?.id) ? `/drivers/${driver.id}` : `/drivers`}>
            <a onClick={() => driver.id && setEdit(false)} className="bdriver-2 bdriver-gray-500 rounded-md bg-gray-500 py-2 w-full text-center text-white text-2xl hover:bg-gray-50 hover:text-gray-500">
              Back
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
}