import DriverHandler from "../../../components/drivers/DriverHandler";

type Props = {
  query: {
    id: string
  }
}

export const createSingleOrderPage = ({ query: { id } }: Props) => {
  return (
    <div>
      <DriverHandler action="create" />
    </div>
  );
};

export default createSingleOrderPage;