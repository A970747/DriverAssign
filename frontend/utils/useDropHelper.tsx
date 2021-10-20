import { DropResult } from 'react-beautiful-dnd';
import { DropHelper } from '../interfaces';
import useData from './useData';

export default function useDropHelper(): DropHelper {
  const { data: orders } = useData('orders');

  function dropHelper(results: DropResult): void {
    const { source, destination } = results;
    console.log(source, destination);
  };

  return {
    dropHelper,
  };
}
