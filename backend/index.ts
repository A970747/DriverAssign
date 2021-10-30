import app from "./app";
import db from "./config/db";
import { Driver } from "./models/Driver";
import { Order } from "./models/Order";
import { driverData, orderData } from "./tests/mockData";

// use db.authenticate when this goes to postgres
if (process.env.NODE_ENV === 'production') {
  // !remove SYNC when migrations are setup. Migrations should be syncing the tables - this is a workaround for deving.
  db.authenticate()
    .then(() => db.sync({ force: true })
      .then(async () => {
        console.log('Connection has been established successfully.')
        await Driver.bulkCreate(driverData, { returning: true });
        await Order.bulkCreate(orderData, { returning: true })
      }))
    .catch(() => console.error('Unable to connect to the PG database:'))

}
if (process.env.NODE_ENV === 'development') {
  db.sync({ force: true })
    .then(async () => {
      console.log("Connected to DB");
      const drivers = await Driver.bulkCreate(driverData, { returning: true });
      const orders = await Order.bulkCreate(orderData, { returning: true })
    })
    .catch(() => {
      console.log("Problem attempting to start up the SQLite db")
    });
}

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});