import { SingleDriver } from '../../components/drivers/SingleDriver';

type Props = {
  query: {
    id: string
  }
}

const singleDriverPage = ({ query: { id } }: Props) => <SingleDriver id={id} />;

export default singleDriverPage;
