// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

import { DropResult } from 'react-beautiful-dnd';

export type User = {
  id: number
  name: string
}

export type Order = {
  description: string,
  cost: number,
  distance: number,
  driver: number | null,
  endCity: string,
  endProv: string,
  endCountry: string,
  endDate: string,
  id: number,
  revenue: number,
  startCity: string,
  startProv: string,
  startCountry: string,
  startDate: string,
}

export type Driver = {
  id: number,
  firstName: string,
  lastName: string,
  fullName: string
}

export type DropHelper = {
  dropHelper: (a: DropResult) => void
}
