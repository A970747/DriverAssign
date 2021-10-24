import { useState } from 'react';
import useData from '../../utils/useData';
import DriverHandler from './DriverHandler';
import { SingleDriverCard } from './SingleDriverCard';

type Props = {
  id: string
}

export const SingleDriver = ({ id }: Props) => {
  const { data: driver, isLoading, isError } = useData('drivers', id);
  const [edit, setEdit] = useState(false)

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Unable to load driver data.</p>;
  return (
    <div>
      {
        (edit)
          ? <DriverHandler driver={driver} action="update" setEdit={setEdit} />
          : <SingleDriverCard id={id} edit={edit} setEdit={setEdit} />
      }
    </div>
  );
};