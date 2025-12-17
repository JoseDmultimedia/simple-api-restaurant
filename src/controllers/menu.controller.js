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

      if (!menu) return res.status(404).json({ message: "Menu not found" });

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

      if (!menu) return res.status(404).json({ message: "Menu not found" });

      await menu.update(req.body);
      res.json(menu);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const menu = await Menu.findByPk(req.params.id);

      if (!menu) return res.status(404).json({ message: "Menu not found" });

      await menu.destroy();
      res.json({ message: "Menu deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getMenuText(req, res) {
    try {
      const menus = await Menu.findAll();

      const comidas = menus.filter((m) => m.category === "comida");
      const bebidas = menus.filter((m) => m.category === "bebida");

      let responseText = "Comidas:\n\n";

      comidas.forEach((item) => {
        responseText += `  ${item.name}: ${
          item.description
        } - ${item.price.toLocaleString("es-CO")} pesos\n`;
      });

      responseText += "\nBebidas:\n\n";

      bebidas.forEach((item) => {
        responseText += `  ${item.name} - ${item.price.toLocaleString(
          "es-CO"
        )} pesos\n`;
      });

      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(responseText);
    } catch (error) {
      res.status(500).send(`Error: ${error.message}`);
    }
  },

  async getMenuByIdText(req, res) {
    try {
      const menu = await Menu.findByPk(req.params.id);  
      
      if (!menu) return res.status(404).send("Menu no encontrado");

      const responseText = `${menu.name}:\n${menu.description}\nPrecio: ${menu.price.toLocaleString("es-CO")} pesos`;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(responseText);

    } catch (error) {
      res.status(500).send(`Error: ${error.message}`);
    }
  },

};