import supertest from 'supertest';
import app from '../app';
import db from '../config/db';
import { Driver } from '../models/Driver';
import { driverData, driverIncorrectType, driverNoFirstName, singleDriverUpdate } from './mockData';

const api = supertest(app);
const singleDriver = driverData[0];

beforeAll(async () => {
  await db.sync({ force: true })
  await Driver.bulkCreate(driverData, { returning: false })
});

describe("Test DB driver table is set up as expected", () => {
  test('Test DB to return json', async () => {
    await api.get('/api/drivers')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  })

  test('Test DB has initial mock drivers & can get', async () => {
    const res = await api.get('/api/drivers')

    expect(res.body.length).toBeGreaterThan(0);
  })
})

describe('Driver CRUD tests', () => {
  test("Get individual driver", async () => {
    const res = await api.get('/api/drivers/1');

    expect(200);
    expect(res.body).toMatchObject(singleDriver);
  });

  test("Create an driver", async () => {
    const mockCreateDriver = jest.fn((): any => singleDriver);
    jest
      .spyOn(Driver, "create")
      .mockImplementation(() => mockCreateDriver());

    const res = await api.post('/api/drivers/').send(singleDriver);

    expect(201);
    expect(mockCreateDriver).toHaveBeenCalledTimes(1);
    expect(res.body).toMatchObject(singleDriver);
  });

  test("Update a driver", async () => {
    const initialDriver = await api.get('/api/drivers/1');
    const updatedDriver = await api.put('/api/drivers/1').send(singleDriverUpdate)

    expect(200);
    expect(initialDriver.body).not.toMatchObject(singleDriverUpdate);
    expect(updatedDriver.body.record).toMatchObject(singleDriverUpdate);
  })

  test("Delete an driver", async () => {
    const initial = await api.get('/api/drivers');
    await api.delete('/api/drivers/3');
    const updated = await api.get('/api/drivers');

    expect(204);
    expect(updated.body.length).toEqual(initial.body.length - 1);
  });
})

describe("Exception and error handling", () => {
  test("Should fail on driver with improper variables", async () => {
    const mockCreateDriver = jest.fn((): any => {
      { }
    });
    jest
      .spyOn(Driver, "create")
      .mockImplementation(() => mockCreateDriver());

    const res = await api.post('/api/drivers/').send(singleDriver);

    expect(mockCreateDriver).toHaveBeenCalledTimes(1);
    expect(res.body).toEqual({
      message: "Failed to create driver",
      status: 500,
      route: "api/drivers",
    });
  })

  test("Should error on missing required value", async () => {
    const res = await api.post('/api/drivers/').send(driverNoFirstName);

    expect(500);
    expect(res.body).toHaveProperty('errors');
    expect(res.body.errors[0]).toMatchObject({
      msg: 'Driver first name is required.',
      param: 'firstName',
    })
  });

  test("Should error on incorrect type", async () => {
    const res = await api.post('/api/drivers/').send(driverIncorrectType);
    console.log(res.body);

    expect(500);
    expect(res.body).toMatchObject({
      message: "Failed to create driver",
      status: 500,
      route: "api/drivers",
    })
  });

  test("Sends 404 for driver that does not exist", async () => {
    await api.get('/api/drivers/9999999')
    expect(404);
  });
});

export default {};