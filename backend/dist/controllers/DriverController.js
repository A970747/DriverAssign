"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Driver_1 = require("../models/Driver");
class DriverController {
    async getAllDrivers(req, res) {
        try {
            const record = await Driver_1.DriverInstance.findAll();
            return res.json(record);
        }
        catch (e) {
            return res.json({ message: "Unable to get all drivers", status: 500, route: "api/drivers" });
        }
    }
    async getSingleDriver(req, res) {
        try {
            const { id } = req.params;
            const record = await Driver_1.DriverInstance.findOne({ where: { id } });
            return res.json(record);
        }
        catch (e) {
            return res.json({ message: "Unable to get driver", status: 500, route: "api/drivers/:id" });
        }
    }
    async addDriver(req, res) {
        // const id = uuidv4();
        try {
            const record = await Driver_1.DriverInstance.create({ ...req.body });
            return res.json({ record, message: "Successfully created driver" });
        }
        catch (e) {
            return res.json({ message: "Failed to create driver", status: 500, route: "api/drivers" });
        }
    }
    async updateDriver(req, res) {
        try {
            const { id } = req.params;
            const record = await Driver_1.DriverInstance.findOne({ where: { id } });
            if (!record) {
                return res.json({ message: `Can not find driver with id: ${id}` });
            }
            const updatedRecord = await record.update({ ...req.body });
            return res.json({ record: updatedRecord });
        }
        catch (e) {
            return res.json({
                message: "Unable to update",
                status: 500,
                route: "api/drivers/:id",
            });
        }
    }
    async deleteDriver(req, res) {
        try {
            const { id } = req.params;
            const record = await Driver_1.DriverInstance.findOne({ where: { id } });
            if (!record) {
                return res.json({ message: `Can not find driver with id: ${id}` });
            }
            const deletedRecord = await record.destroy();
            return res.json({ record: deletedRecord });
        }
        catch (e) {
            return res.json({
                message: "Unable to delete",
                status: 500,
                route: "api/drivers/:id",
            });
        }
    }
}
exports.default = new DriverController();
