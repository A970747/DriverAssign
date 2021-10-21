import { SingleDriver } from '../../components/SingleDriver';
import useData from '../../utils/useData';

type Props = {
  query: {
    id: string
  }
}

const singleDriverPage = ({ query: { id } }: Props) => {
  const { data, isLoading, isError } = useData('drivers', id);
  //const driver = (isLoading) ? {} : data.find((driver: Driver) => driver.id == parseInt(id));
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load</p>;

  return <SingleDriver driver={data} />;
};


export default singleDriverPage;
