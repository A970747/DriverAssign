import { Request, Response } from "express";
import { OrderInstance } from "../models/Order";

class OrderController {
  async getAllOrders(req: Request, res: Response) {
    try {
      const record = await OrderInstance.findAll();
      return res.status(200).json(record);
    } catch (e) {
      return res.status(500).json({ message: "Unable to get all Orders", status: 500, route: "api/Orders" });
    }
  }

  async getSingleOrder(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await OrderInstance.findOne({ where: { id } });
      return res.json(record);
    } catch (e) {
      return res.status(500).json({ message: "Unable to get Order", status: 500, route: "api/Orders/:id" });
    }
  }

  async addOrder(req: Request, res: Response) {
    // const id = uuidv4();
    try {
      const record = await OrderInstance.create({ ...req.body });
      return res.status(201).json({ record, message: "Successfully created Order" });
    } catch (e) {
      return res.status(500).json({ message: "Failed to create Order", status: 500, route: "api/Orders" });
    }
  }

  async updateOrder(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await OrderInstance.findOne({ where: { id } });

      if (!record) {
        return res.status(500).json({ message: `Can not find Order with id: ${id}` });
      }

      const updatedRecord = await record.update({ ...req.body });
      return res.json({ record: updatedRecord });
    } catch (e) {
      return res.status(500).json({ message: "Unable to update", status: 500, route: "api/Orders/:id" });
    }
  }
  async deleteOrder(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await OrderInstance.findOne({ where: { id } });

      if (!record) {
        return res.json({ message: `Can not find Order with id: ${id}` });
      }

      const deletedRecord = await record.destroy();
      return res.status(204).json({ record: deletedRecord });
    } catch (e) {
      return res.status(500).json({
        message: "Unable to delete",
        status: 500,
        route: "api/Orders/:id",
      });
    }
  }
}

export default new OrderController();