import { NextFunction, Request, Response } from "express";
import { Order } from "../models/Order";

class OrderController {
  async getAllOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const record = await Order.findAll();

      if (record) {
        res.json(record)
      } else {
        res.status(500).json({ message: "Unable to get all orders", status: 500, route: "api/Orders" });
      }
    } catch (e) {
      next(e);
    }
  }

  async getSingleOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const record = await Order.findOne({ where: { id } });
      if (record) {
        res.json(record)
      } else {
        res.status(404).json({ message: "Order does not exist", status: 404, route: "api/Orders" });
      }
    } catch (e) {
      next(e);
    }
  }

  async addOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const record = await Order.create({ ...req.body })
      if (record) {
        res.status(201).json(record);
      } else {
        res.status(500).json({ message: "Failed to create Order", status: 500, route: "api/Orders" });
      }
    } catch (e) {
      next(e);
    }
  }

  async updateOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const record = await Order.findOne({ where: { id } });

      if (!record) {
        return res.status(404).json({ message: `Can not find order with id: ${id}` });
      }

      const updatedRecord = await record.update({ ...req.body });

      if (updatedRecord) {
        res.json({ record: updatedRecord });
      } else {
        res.status(500).json({ method: "PUT", message: "Unable to update", status: 500, route: "api/orders/:id" });
      }
    } catch (e) {
      next(e);
    }
  }

  async deleteOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const record = await Order.findOne({ where: { id } });

      if (!record) {
        return res.status(404).json({ message: `Can not find order with id: ${id}` });
      }

      const deletedRecord = await record.destroy();

      if (deletedRecord) {
        res.status(204).json({ record: deletedRecord });
      } else {
        return res.status(500).json({
          method: "PUT",
          message: "Unable to delete",
          route: "api/orders/:id",
          status: 500
        });
      }
    } catch (e) {
      next(e);
    }
  }
}

export default new OrderController();