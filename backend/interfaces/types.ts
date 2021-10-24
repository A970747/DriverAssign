// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface Driver {
  firstName: string,
  lastName: string,
  fullName: string
}

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