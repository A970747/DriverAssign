import { NextFunction, Request, Response } from "express";
import { Driver } from "../models/Driver";

class DriverController {
  async getAllDrivers(req: Request, res: Response, next: NextFunction) {
    try {
      const record = await Driver.findAll();
      return res.status(200).json(record);
    } catch (e) {
      return res.status(500).json({ message: "Unable to get all drivers", status: 500, route: "api/drivers" });
    }
  }

  async getSingleDriver(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const record = await Driver.findOne({ where: { id } });
      return res.json(record);
    } catch (e) {
      return res.status(500).json({ message: "Unable to get driver", status: 500, route: "api/drivers/:id" });
    }
  }

  async addDriver(req: Request, res: Response, next: NextFunction) {
    // const id = uuidv4();
    try {
      const record = await Driver.create({ ...req.body });
      return res.status(201).json(record);
    } catch (e) {
      return res.status(500).json({ message: "Failed to create driver", status: 500, route: "api/drivers" });
    }
  }

  async updateDriver(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const record = await Driver.findOne({ where: { id } });

      if (!record) {
        return res.status(404).json({ message: `Can not find driver with id: ${id}` });
      }

      const updatedRecord = await record.update({ ...req.body });
      if (updatedRecord) {
        res.json({ record: updatedRecord });
      } else {
        res.status(500).json({ method: "PUT", message: "Unable to update", status: 500, route: "api/drivers/:id" });
      }
    } catch (e) {
      next(e);
    }
  }

  async deleteDriver(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const record = await Driver.findOne({ where: { id } });

      if (!record) {
        return res.status(404).json({ message: `Can not find driver with id: ${id}` });
      }

      const deletedRecord = await record.destroy();
      if (deletedRecord) {
        res.status(204).json({ record: deletedRecord });
      } else {
        res.status(500).json({
          method: "PUT",
          message: "Unable to delete",
          status: 500,
          route: "api/drivers/:id",
        });
      }
    } catch (e) {
      next(e);
    }
  }
}

export default new DriverController();