import { SingleDriver } from '../../components/SingleDriver';

type Props = {
  query: {
    id: string
  }
}

const singleDriverPage = ({ query: { id } }: Props) => <SingleDriver id={id} />;

export default singleDriverPage;
