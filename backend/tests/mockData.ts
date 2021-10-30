import { Driver, Order } from "../interfaces/types";

export const driverData: Driver[] = [
  {
    firstName: "Eddie",
    lastName: "Murphy",
    fullName: "Eddie Murphy"
  },
  {
    firstName: "Annie",
    lastName: "Wong",
    fullName: "Annie Wong"
  },
  {
    firstName: "Eddy",
    lastName: "Izzard",
    fullName: "Eddie Izzard"
  },
]

export const singleDriverUpdate: Driver = {
  firstName: "Bobby",
  lastName: "Murphy",
  fullName: "Eddie Murphy"
}

export const driverNoFirstName = {
  lastName: "Murphy",
  fullName: "Eddie Murphy"
}

export const driverIncorrectType = {
  firstName: 1,
  lastName: "Murphy",
  fullName: "Eddie Murphy"
}

export const orderData: Order[] = [
  {
    cost: 1000,
    description: "Generic comment",
    distance: 500,
    driver: 1,
    endCity: "Boston",
    endCountry: "USA",
    endDate: "2021-10-15T11:00:00.000Z",
    endProv: "MA",
    revenue: 2000,
    startCity: "Winnipeg",
    startCountry: "CA",
    startDate: "2021-10-13T06:00:00.000Z",
    startProv: "MB",
  },
  {
    cost: 500,
    description: "Test description",
    distance: 100,
    driver: 1,
    endCity: "Chicago",
    endCountry: "USA",
    endDate: "2021-10-23T07:46.000Z",
    endProv: "IL",
    revenue: 1000,
    startCity: "Toronto",
    startCountry: "CA",
    startDate: "2021-10-22T07:46.000Z",
    startProv: "ON",
  },
  {
    cost: 2000,
    description: "Generic comment",
    distance: 750,
    driver: 2,
    endCity: "Boston",
    endCountry: "USA",
    endDate: "2021-10-05T22:00.000Z",
    endProv: "MA",
    revenue: 4000,
    startCity: "Winnipeg",
    startCountry: "CA",
    startDate: "2021-10-03T18:00.000Z",
    startProv: "MB",
  },
  {
    cost: 800,
    description: "Generic comment",
    distance: 750,
    driver: null,
    endCity: "Brixton",
    endCountry: "USA",
    endDate: "2021-10-05T09:00.000Z",
    endProv: "MA",
    revenue: 2500,
    startCity: "The Pas",
    startCountry: "CA",
    startDate: "2021-10-11T18:00.000Z",
    startProv: "MB",
  },
  {
    cost: 600,
    description: "Generic comment",
    distance: 3000,
    driver: null,
    endCity: "Ann Arbor",
    endCountry: "USA",
    endDate: "2021-10-05T09:00.000Z",
    endProv: "MI",
    revenue: 1200,
    startCity: "Surrey",
    startCountry: "CA",
    startDate: "2021-10-11T18:00.000Z",
    startProv: "BC",
  },
]

export const singleOrderUpdate: Order = {
  cost: 500,
  description: "Updated description",
  distance: 250,
  driver: 1,
  endCity: "UpdateCity",
  endCountry: "USA",
  endDate: "2021-10-15T11:00:00.000Z",
  endProv: "MA",
  revenue: 2000,
  startCity: "Winnipeg",
  startCountry: "CA",
  startDate: "2021-10-15T11:00:00.000Z",
  startProv: "MB",
}

export const orderNoStartDate = {
  cost: 500,
  description: "Updated description",
  distance: 250,
  driver: 1,
  endCity: "UpdateCity",
  endCountry: "USA",
  endDate: "2021-10-15T11:00:00.000Z",
  endProv: "MA",
  revenue: 2000,
  startCity: "Winnipeg",
  startCountry: "CA",
  startProv: "MB",
}

export const orderIncorrectDistanceType = {
  cost: 500,
  description: "Updated description",
  distance: "250",
  driver: 1,
  endCity: "UpdateCity",
  endCountry: "USA",
  endDate: "2021-10-15T11:00:00.000Z",
  endProv: "MA",
  revenue: 2000,
  startCity: "Winnipeg",
  startCountry: "CA",
  startDate: null,
  startProv: "MB",
}