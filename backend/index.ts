import app from "./app";
import db from "./config/db";

// use db.authenticate when this goes to postgres
if (process.env.NODE_ENV === 'production') {
  try {
    db.authenticate().sync({ force: true }).then(() => console.log('Connection has been established successfully.'));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
} else {
  db.sync({ force: true })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch(() => {
      console.log("Problem attempting to start up the SQLite db")
    });
}

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});