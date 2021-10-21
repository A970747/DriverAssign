import { SingleOrder } from '../../components/SingleOrder';

type Props = {
  query: {
    id: string
  }
}

const singleOrderPage = ({ query: { id } }: Props) => <SingleOrder id={id} />;

export default singleOrderPage;
