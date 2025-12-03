import { Order } from "../models/indexModels.js";
import { OrderProducts } from "../models/indexModels.js";
import { Menu } from "../models/indexModels.js";

export const OrderController = {
  async getAll(req, res) {
    try {
      const orders = await Order.findAll({
        include: [{ model: OrderProducts, include: [Menu] }],
      });

      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const order = await Order.findByPk(req.params.id, {
        include: [{ model: OrderProducts, include: [Menu] }],
      });

      if (!order)
        return res.status(404).json({ message: "Order not found" });

      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const order = await Order.create(req.body);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const order = await Order.findByPk(req.params.id);

      if (!order)
        return res.status(404).json({ message: "Order not found" });

      await order.update(req.body);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const order = await Order.findByPk(req.params.id);

      if (!order)
        return res.status(404).json({ message: "Order not found" });

      await order.destroy();
      res.json({ message: "Order deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
