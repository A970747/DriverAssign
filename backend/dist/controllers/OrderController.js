"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = require("../models/Order");
class OrderController {
    async getAllOrders(req, res, next) {
        try {
            const { id } = req.params;
            const record = await Order_1.Order.findAll();
            if (record) {
                res.json(record);
            }
            else {
                res.status(500).json({ message: "Unable to get all orders", status: 500, route: "api/Orders" });
            }
        }
        catch (e) {
            next(e);
        }
    }
    async getSingleOrder(req, res, next) {
        try {
            const { id } = req.params;
            const record = await Order_1.Order.findOne({ where: { id } });
            if (record) {
                res.json(record);
            }
            else {
                res.status(404).json({ message: "Order does not exist", status: 404, route: "api/Orders" });
            }
        }
        catch (e) {
            next(e);
        }
    }
    async addOrder(req, res, next) {
        try {
            const record = await Order_1.Order.create({ ...req.body });
            if (record) {
                res.status(201).json(record);
            }
            else {
                res.status(500).json({ message: "Failed to create Order", status: 500, route: "api/Orders" });
            }
        }
        catch (e) {
            next(e);
        }
    }
    async updateOrder(req, res, next) {
        try {
            const { id } = req.params;
            const record = await Order_1.Order.findOne({ where: { id } });
            if (!record) {
                return res.status(404).json({ message: `Can not find order with id: ${id}` });
            }
            const updatedRecord = await record.update({ ...req.body });
            if (updatedRecord) {
                res.json({ record: updatedRecord });
            }
            else {
                res.status(500).json({ method: "PUT", message: "Unable to update", status: 500, route: "api/orders/:id" });
            }
        }
        catch (e) {
            next(e);
        }
    }
    async deleteOrder(req, res, next) {
        try {
            const { id } = req.params;
            const record = await Order_1.Order.findOne({ where: { id } });
            if (!record) {
                return res.status(404).json({ message: `Can not find order with id: ${id}` });
            }
            const deletedRecord = await record.destroy();
            if (deletedRecord) {
                res.status(204).json({ record: deletedRecord });
            }
            else {
                return res.status(500).json({
                    method: "PUT",
                    message: "Unable to delete",
                    route: "api/orders/:id",
                    status: 500
                });
            }
        }
        catch (e) {
            next(e);
        }
    }
}
exports.default = new OrderController();
