import { BuildOptions, DataTypes, Model } from 'sequelize';
import db from '../config/db';

interface OrderAttributes extends Model {
  description: string,
  cost: number,
  distance: number,
  driver: number | null,
  endCity: string,
  endProv: string,
  endCountry: string
  endDate: string,
  id: number,
  revenue: number,
  startCity: string,
  startProv: string,
  startCountry: string,
  startDate: string,
}

type OrderAttributesStatic = typeof Model & (new (values?: object, options?: BuildOptions) => any);

export const Order = db.define('Order',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    driver: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    // start
    distance: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    revenue: {
      type: DataTypes.FLOAT,
      defaultValue: null,
    },
    cost: {
      type: DataTypes.FLOAT,
      defaultValue: null,
    },
    // here
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    startCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startProv: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startCountry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endProv: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endCountry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: "Generic commodity",
    },
  },
  {
    sequelize: db,
    tableName: 'Orders',
  }
) as OrderAttributesStatic
