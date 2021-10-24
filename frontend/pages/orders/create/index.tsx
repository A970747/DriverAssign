import OrderHandler from '../../../components/orders/OrderHandler';

type Props = {
  query: {
    id: string
  }
}

export const createSingleOrderPage = ({ query: { id } }: Props) => {

  return (
    <div>
      <OrderHandler action="create" />
    </div>
  );
};

export default createSingleOrderPage;