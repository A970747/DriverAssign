import useData from '../../utils/useData';

type Props = {
  id: string
}

export const SingleDriver = ({ id }: Props) => {
  const { data, isLoading, isError } = useData('drivers', id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load</p>;
  return (
    <div>
      <div>
        <p>Account Details</p>
        <p>{data.fullName}</p>
      </div>
      <div>
        <p>Order Details - Make this date selectable?</p>
      </div>
    </div>
  );
};
