<img src="https://images.unsplash.com/photo-1565891741441-64926e441838?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" height="200" width="200" />

# :truck::truck: DriveAssign:truck::truck:

With this app users are able to create drivers and orders to simulate a dispatch scenario. Using a drag-and-drop interface they are able to assign drivers to orders.
This app is live @ https://driveassign.mattjackson.dev/. The front end is written in TypeScript using the NextJS framework with TailwindsCSS for styling, and SWR for data fetching & caching. The backend application is available at https://order-api.mattjackson.dev/api, with /drivers and /orders routes available. The backend is written in TypeScript using NodeJS with Sequelize in front of a PostGresSQL DB. Additionally, the app can be run locally with a
local installation that uses SQLite.

## Stack

 - TypeScript
 - NextJS
 - SWR
 - TailwindCSS
 - NodeJS
 - Sequelize
 - PostgreSQL

## Basic features

All base requirements have been met.

 - Orders can be assigned, and re-assigned via the drag-and-drop interface
 - Simple, thoughtful UI.
 - Revenue and costs can be updated.
 - Back-end with CRUD operations.
 - Data persists.

## Setup

None! The full working app, connected to the live DB can be used here: https://driveassign.mattjackson.dev/.

If you want to run the app locally you can do the following:

_FROM ROOT:

1. Install Node(https://nodejs.org/en/download/)

2. Install NPM

```
$ npm install -g npm
```

3. Clone the repository.

```
git clone https://github.com/A970747/DriverAssign.git
```
```
cd DriverAssign/
```

4. Install dependencies 

```
cd ./frontend && npm install && cd ../backend && npm install & cd ..
```

5. Running the front-end:

```
cd ./frontend && npm run dev
```

6. Running the back-end, _in a new terminal window in the /DriverAssign directory_:

```
cd ./backend && npm run dev
```

7. Navigate to the local site:

localhost:3000/

## About me

Personal site mattjackon.dev
For those that :bird:, @MattJacksonDev



