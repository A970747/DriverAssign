import app from "./app";
import db from "./config/db";

// use db.authenticate when this goes to postgres

db.sync().then(() => {
  console.log("Connected to DB");
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});