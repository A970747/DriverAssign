import { DataTypes, Model } from 'sequelize';
import db from '../config/db';
import { OrderInstance } from './Order';

interface DriverAttributes {
  id: number,
  firstName: string,
  lastName: string,
  fullName: string,
}

export class DriverInstance extends Model<DriverAttributes> { }

DriverInstance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "FirstName",
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "LastName",
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    tableName: 'Drivers',
  }
)

DriverInstance.hasMany(OrderInstance);
