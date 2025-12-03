import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../config/connection.js";

export const OrderProducts = sequelizeConfig.define(
  "OrderProducts",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idOrder: { type: DataTypes.INTEGER, allowNull: false },
    idMenu: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    priceAtPurchase: { type: DataTypes.DOUBLE, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
  },
  {
    timestamps: false,
    tableName: "order_products",
  }
);
