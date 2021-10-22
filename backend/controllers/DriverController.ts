import { Request, Response } from "express";
import { DriverInstance } from "../models/Driver";

class DriverController {
  async getAllDrivers(req: Request, res: Response) {
    try {
      const record = await DriverInstance.findAll();
      return res.json(record);
    } catch (e) {
      return res.json({ message: "Unable to get all drivers", status: 500, route: "api/drivers" });
    }
  }

  async getSingleDriver(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await DriverInstance.findOne({ where: { id } });
      return res.json(record);
    } catch (e) {
      return res.json({ message: "Unable to get driver", status: 500, route: "api/drivers/:id" });
    }
  }

  async addDriver(req: Request, res: Response) {
    // const id = uuidv4();
    try {
      const record = await DriverInstance.create({ ...req.body });
      return res.json({ record, message: "Successfully created driver" });
    } catch (e) {
      return res.json({ message: "Failed to create driver", status: 500, route: "api/drivers" });
    }
  }

  async updateDriver(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await DriverInstance.findOne({ where: { id } });

      if (!record) {
        return res.json({ message: `Can not find driver with id: ${id}` });
      }

      const updatedRecord = await record.update({ ...req.body });
      return res.json({ record: updatedRecord });
    } catch (e) {
      return res.json({
        message: "Unable to update",
        status: 500,
        route: "api/drivers/:id",
      });
    }
  }
  async deleteDriver(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await DriverInstance.findOne({ where: { id } });

      if (!record) {
        return res.json({ message: `Can not find driver with id: ${id}` });
      }

      const deletedRecord = await record.destroy();
      return res.json({ record: deletedRecord });
    } catch (e) {
      return res.json({
        message: "Unable to delete",
        status: 500,
        route: "api/drivers/:id",
      });
    }
  }
}

export default new DriverController();