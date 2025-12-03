import { Menu } from "../models/indexModels.js";

export const MenuController = {
  async getAll(req, res) {
    try {
      const menus = await Menu.findAll();
      res.json(menus);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const menu = await Menu.findByPk(req.params.id);

      if (!menu)
        return res.status(404).json({ message: "Menu not found" });

      res.json(menu);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const menu = await Menu.create(req.body);
      res.json(menu);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const menu = await Menu.findByPk(req.params.id);

      if (!menu)
        return res.status(404).json({ message: "Menu not found" });

      await menu.update(req.body);
      res.json(menu);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const menu = await Menu.findByPk(req.params.id);

      if (!menu)
        return res.status(404).json({ message: "Menu not found" });

      await menu.destroy();
      res.json({ message: "Menu deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
