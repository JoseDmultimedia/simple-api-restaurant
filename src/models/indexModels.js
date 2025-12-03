import { User } from "./user.model.js";
import { Menu } from "./menu.model.js";
import { Order } from "./order.model.js";
import { OrderProducts } from "./orderProducts.model.js";
import { Reservation } from "./reservation.model.js";
import { Pqr } from "./pqr.model.js";

/* User → Order */
User.hasMany(Order, { foreignKey: "idUser" });
Order.belongsTo(User, { foreignKey: "idUser" });

/* User → Reservation */
User.hasMany(Reservation, { foreignKey: "idUser" });
Reservation.belongsTo(User, { foreignKey: "idUser" });

/* User → PQR */
User.hasMany(Pqr, { foreignKey: "idUser" });
Pqr.belongsTo(User, { foreignKey: "idUser" });

/* Order → OrderProducts */
Order.hasMany(OrderProducts, { foreignKey: "idOrder" });
OrderProducts.belongsTo(Order, { foreignKey: "idOrder" });

/* Menu → OrderProducts */
Menu.hasMany(OrderProducts, { foreignKey: "idMenu" });
OrderProducts.belongsTo(Menu, { foreignKey: "idMenu" });

export {
  User,
  Menu,
  Order,
  OrderProducts,
  Reservation,
  Pqr,
};