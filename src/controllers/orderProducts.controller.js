import { OrderProducts } from "../models/indexModels.js";

export const OrderProductsController = {
  async getAll(req, res) {
    try {
      const items = await OrderProducts.findAll();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const item = await OrderProducts.findByPk(req.params.id);

      if (!item)
        return res.status(404).json({ message: "OrderProduct not found" });

      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const item = await OrderProducts.create(req.body);
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const item = await OrderProducts.findByPk(req.params.id);

      if (!item)
        return res.status(404).json({ message: "OrderProduct not found" });

      await item.update(req.body);
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const item = await OrderProducts.findByPk(req.params.id);

      if (!item)
        return res.status(404).json({ message: "OrderProduct not found" });

      await item.destroy();
      res.json({ message: "OrderProduct deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
