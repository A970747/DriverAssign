import supertest from 'supertest';
import app from '../app';
import db from '../config/db';
import { Order } from '../models/Order';
import { orderData, singleOrderUpdate } from './mockData';

const api = supertest(app);
const singleOrder = orderData[0];
let dbDate: Date;

beforeAll(async () => {
  dbDate = new Date();
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
    expect(res.body).toEqual(expect.objectContaining(singleOrder));
  });

  test("Create an order", async () => {
    const mockCreateOrder = jest.fn((): any => singleOrder);
    jest
      .spyOn(Order, "create")
      .mockImplementation(() => mockCreateOrder());

    const res = await api.post('/api/orders/').send(singleOrder);

    expect(mockCreateOrder).toHaveBeenCalledTimes(1);
    expect(res.body).toEqual(expect.objectContaining(singleOrder));
  });

  test("Update an order", async () => {
    const initialOrder = await api.get('/api/orders/1');
    const updatedOrder = await api.put('/api/orders/1').send(singleOrderUpdate)

    expect(200);
    expect(initialOrder.body).not.toEqual(expect.objectContaining(singleOrderUpdate));
    expect(updatedOrder.body.record).toEqual(expect.objectContaining(singleOrderUpdate));
  })
})

describe("Exception and error handling", () => {
  test("Should handle exceptions", async () => {
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
})

export default {};