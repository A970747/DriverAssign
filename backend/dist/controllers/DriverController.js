"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Driver_1 = require("../models/Driver");
class DriverController {
    async getAllDrivers(req, res, next) {
        try {
            const record = await Driver_1.Driver.findAll();
            if (record) {
                res.json(record);
            }
            else {
                res.status(500).json({ message: "Unable to get all drivers", status: 500, route: "api/drivers" });
            }
        }
        catch (e) {
            next(e);
        }
    }
    async getSingleDriver(req, res, next) {
        try {
            const { id } = req.params;
            const record = await Driver_1.Driver.findOne({ where: { id } });
            if (record) {
                res.json(record);
            }
            else {
                res.status(404).json({ message: "Unable to get driver", status: 500, route: "api/drivers/:id" });
            }
        }
        catch (e) {
            next(e);
        }
    }
    async addDriver(req, res, next) {
        try {
            const record = await Driver_1.Driver.create({ ...req.body });
            if (record) {
                return res.status(201).json(record);
            }
            else {
                res.status(500).json({ message: "Failed to create driver", status: 500, route: "api/drivers" });
            }
        }
        catch (e) {
            next(e);
        }
    }
    async updateDriver(req, res, next) {
        try {
            const { id } = req.params;
            const record = await Driver_1.Driver.findOne({ where: { id } });
            if (!record) {
                return res.status(404).json({ message: `Can not find driver with id: ${id}` });
            }
            const updatedRecord = await record.update({ ...req.body });
            if (updatedRecord) {
                res.json({ record: updatedRecord });
            }
            else {
                res.status(500).json({ method: "PUT", message: "Unable to update", status: 500, route: "api/drivers/:id" });
            }
        }
        catch (e) {
            next(e);
        }
    }
    async deleteDriver(req, res, next) {
        try {
            const { id } = req.params;
            const record = await Driver_1.Driver.findOne({ where: { id } });
            if (!record) {
                return res.status(404).json({ message: `Can not find driver with id: ${id}` });
            }
            const deletedRecord = await record.destroy();
            if (deletedRecord) {
                res.status(204).json({ record: deletedRecord });
            }
            else {
                res.status(500).json({
                    method: "PUT",
                    message: "Unable to delete",
                    status: 500,
                    route: "api/drivers/:id",
                });
            }
        }
        catch (e) {
            next(e);
        }
    }
}
exports.default = new DriverController();
