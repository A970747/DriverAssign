import useData from '../utils/useData';

type Props = {
  id: string
}

export const SingleOrder = ({ id }: Props) => {
  const { data, isLoading, isError } = useData('orders', id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load</p>;
  return (
    <div>
      <p>Account Details</p>
      <p>{data.id}</p>
      <p>{data.startCity} {data.endCity}</p>
    </div>
  );
};
