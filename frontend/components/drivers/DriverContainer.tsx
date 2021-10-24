import { Driver } from '../../interfaces';

type Props = {
  driver: Driver
}

export const DriverContainer = ({ driver }: Props) => {
  return (
    <div>
      {driver.fullName}
    </div>
  );
};
