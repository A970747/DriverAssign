import { Driver } from '../interfaces';

type Props = {
  driver: Driver
}

export const SingleDriver = ({ driver }: Props) => {
  return (
    <div>
      <p>{driver.fullName}</p>
    </div>
  );
};
