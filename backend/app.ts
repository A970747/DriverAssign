import cors from 'cors';
import express from "express";
import DriverRouter from './routes/DriverRouter';
import middleware from './utils/middleware';

const app = express();

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.use("/api/drivers", DriverRouter);
// app.use("/api/orders", OrderRoutes);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;