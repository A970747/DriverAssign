import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

interface OrderAttributes {
  description: string,
  /* cost: number,
  distance: number, */
  driver: number | null,
  /* endCity: string,
  endProv: string,
  endCountry: string */
  endDate: string,
  id: number,
  /* revenue: number,
  startCity: string,
  startProv: string,
  startCountry: string, */
  startDate: string,
}

export class OrderInstance extends Model<OrderAttributes> { }

//driver type = null might have been causing those delete issues from json server.
OrderInstance.init(
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
    /* distance: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    revenue: {
      type: DataTypes.FLOAT,
      defaultValue: null,
    },
    cost: {
      type: DataTypes.FLOAT,
      defaultValue: null, */
    //},
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    /* startCity: {
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
    }, */
    description: {
      type: DataTypes.STRING,
      defaultValue: "Generic commodity",
    },
  },
  {
    sequelize: db,
    tableName: 'Orders',
  }
)