import Link from 'next/link';
import useData from '../../utils/useData';

type Props = {
  id: string,
  edit: boolean,
  setEdit: any
}

export const SingleDriverCard = ({ id, edit, setEdit }: Props) => {
  const { data, isLoading, isError } = useData('drivers', id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load</p>;
  return (
    <div className="border-2 p-6 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-stretch gap-10 sm:flex-row items-center">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col py-2 px-10 justify-items-center">
            <img className="rounded-full max-h-32 border-2" src="https://i.pravatar.cc/300" alt="Random driver avatar" />
            <p className="text-xl">{data.fullName}</p>
            <p>Fleet</p>
            <p>Home Office</p>
          </div>
          <div className="flex gap-x-2">
            <button className="border-2 border-gray-500 rounded-md w-full py-2 bg-gray-500 text-center text-white text-2xl hover:bg-gray-50 hover:text-gray-500" onClick={() => setEdit(!edit)}>Edit</button>
            <Link href={`/orders`}>
              <a className="border-2 border-gray-500 rounded-md bg-gray-500 py-2 w-full text-center text-white text-2xl hover:bg-gray-50 hover:text-gray-500">
                Back
              </a>
            </Link>
          </div>
        </div>
        <div className="flex-grow border-2 rounded-md">
          <p className="flex w-full h-full justify-center items-center">Order data would go here</p>
        </div>
      </div>
    </div>
  );
};