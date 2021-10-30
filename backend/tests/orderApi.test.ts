import supertest from 'supertest';
import app from '../app';
import db from '../config/db';
import { Order } from '../models/Order';
import { orderData, orderIncorrectDistanceType, orderNoStartDate, singleOrderUpdate } from './mockData';

const api = supertest(app);
const singleOrder = orderData[0];

beforeAll(async () => {
  await db.sync({ force: true })
  await Order.bulkCreate(orderData, { returning: false })
});

describe("Test DB order table is set up as expected", () => {
  test('Test DB to return json', async () => {
    await api.get('/api/orders')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  })

  test('Test DB has initial mock orders & can get', async () => {
    const res = await api.get('/api/orders')

    expect(res.body.length).toBeGreaterThan(0);
  })
})

describe('Order CRUD tests', () => {
  test("Get individual order", async () => {
    const res = await api.get('/api/orders/1');

    expect(200);
    expect(res.body).toMatchObject(singleOrder);
  });

  test("Create an order", async () => {
    const mockCreateOrder = jest.fn((): any => singleOrder);
    jest
      .spyOn(Order, "create")
      .mockImplementation(() => mockCreateOrder());

    const res = await api.post('/api/orders/').send(singleOrder);

    expect(201);
    expect(mockCreateOrder).toHaveBeenCalledTimes(1);
    expect(res.body).toMatchObject(singleOrder);
  });

  test("Update an order", async () => {
    const initialOrder = await api.get('/api/orders/1');
    const updatedOrder = await api.put('/api/orders/1').send(singleOrderUpdate)

    expect(200);
    expect(initialOrder.body).not.toMatchObject(singleOrderUpdate);
    expect(updatedOrder.body.record).toMatchObject(singleOrderUpdate);
  })

  test("Delete an order", async () => {
    const initial = await api.get('/api/orders');
    await api.delete('/api/orders/5');
    const updated = await api.get('/api/orders');

    expect(204);
    expect(updated.body.length).toEqual(initial.body.length - 1);
  });
})

describe("Exception and error handling", () => {
  test("Should fail on order with improper variables", async () => {
    const mockCreateOrder = jest.fn((): any => {
      { }
    });
    jest
      .spyOn(Order, "create")
      .mockImplementation(() => mockCreateOrder());

    const res = await api.post('/api/orders/').send(singleOrder);

    expect(mockCreateOrder).toHaveBeenCalledTimes(1);
    expect(res.body).toEqual({
      message: "Failed to create Order",
      status: 500,
      route: "api/Orders",
    });
  })

  test("Should error on missing required value", async () => {
    const res = await api.post('/api/orders/').send(orderNoStartDate);

    expect(500);
    expect(res.body).toHaveProperty('errors');
    expect(res.body.errors[0]).toMatchObject({
      msg: 'Start Date is required.',
      param: 'startDate',
    })
  });

  test("Should error on incorrect type", async () => {
    const res = await api.post('/api/orders/').send(orderIncorrectDistanceType);

    expect(500);
    expect(res.body).toHaveProperty('errors');
    expect(res.body.errors[0]).toMatchObject({
      msg: 'Start Date is required.',
      param: 'startDate',
    })
  });

  test("Sends 404 for order that does not exist", async () => {
    await api.get('/api/orders/9999999')
    expect(404);
  });
});

export default {};