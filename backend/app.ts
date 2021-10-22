import cors from 'cors';
import express from "express";
import middleware from './utils/middleware';
/* import todoRouter from "./todo/route"; */

const app = express();

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

// app.use("/api/drivers", driverRouter);
// app.use("/api/orders", orderRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;