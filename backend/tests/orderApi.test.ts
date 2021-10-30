import request from 'supertest';
import app from '../app';
import { Order } from '../models/Order';
import { orderData } from '../utils/mockData';

describe('Creates order', () => {
  const singleOrder = orderData[0];
  const singleOrderKeys = Object.keys(singleOrder);

  it("Should create an order", async () => {
    const mockCreateOrder = jest.fn((): any => singleOrder);
    jest
      .spyOn(Order, "create")
      .mockImplementation(() => mockCreateOrder());

    const { body } = await await request(app).post('/api/orders/').send(singleOrder);
    const responseKeys = Object.keys(body);

    expect(mockCreateOrder).toHaveBeenCalledTimes(1);
    expect(responseKeys).toEqual(singleOrderKeys);
  });

  it("Should handle exceptions", async () => {
    const mockCreateOrder = jest.fn((): any => {
      { }
    });
    jest
      .spyOn(Order, "create")
      .mockImplementation(() => mockCreateOrder());

    const res = await await request(app).post('/api/orders/').send(singleOrder);

    expect(mockCreateOrder).toHaveBeenCalledTimes(1);
    expect(res.body).toEqual({
      message: "Failed to create Order",
      status: 500,
      route: "api/Orders",
    });
  })
})

export default {};