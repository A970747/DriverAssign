import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

interface DriverAttributes {
  id: Number,
  firstName: String,
  lastName: String,
  fullName: String,
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

