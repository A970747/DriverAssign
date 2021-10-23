import { BuildOptions, DataTypes, Model } from 'sequelize';
import db from '../config/db';

interface DriverAttributes extends Model {
  id: number,
  firstName: string,
  lastName: string,
  fullName: string,
}

type DriverAttributesStatic = typeof Model & (new (values?: any, options?: BuildOptions) => any);

export const Driver = db.define('Driver',
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
) as DriverAttributesStatic
