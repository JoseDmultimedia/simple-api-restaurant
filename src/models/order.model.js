import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../config/connection.js";

export const Order = sequelizeConfig.define(
  "Order",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idUser: { type: DataTypes.INTEGER, allowNull: false },
    totalPrice: { type: DataTypes.DOUBLE, allowNull: false },
    paymentMethod: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    tableName: "order",
  }
);
