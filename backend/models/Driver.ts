import { DataTypes } from 'sequelize';
import db from '../config/db';

interface DriverAttributes {
  id: number,
  firstName: string,
  lastName: string,
  fullName: string,
}

const Driver = db.define('Driver',
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

