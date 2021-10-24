// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//

import { DropResult } from 'react-beautiful-dnd';

export interface Order {
  description: string,
  cost: number | null,
  distance: number | null,
  driver: number | null,
  endCity: string,
  endProv: string,
  endCountry: string,
  endDate: string,
  id?: number,
  revenue: number | null,
  startCity: string,
  startProv: string,
  startCountry: string,
  startDate: string,
}

export type Driver = {
  id?: number,
  firstName: string,
  lastName: string,
  fullName?: string
}

export type DropHelper = {
  dropHelper: (a: DropResult) => void
}

export interface eventTargetValues {
  name: string,
  type: string,
  value: string | number
}

export interface edit {
  edit: boolean
}

export interface setEdit {
  success: boolean,
  message: string,
}

export interface reducerTotals {
  totalRev: number,
  totalCost: number,
}