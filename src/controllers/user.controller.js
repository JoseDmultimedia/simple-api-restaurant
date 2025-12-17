import { User } from "../models/indexModels.js";

export const UserController = {
  async getAll(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getByEmail(req, res) {
    try {
      const user = await User.findOne({ where: { email: req.params.email } });  
      if (!user)
        return res.status(404).json({ message: "User not found" });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getByEmailText(req, res) {
    try {
      const user = await User.findOne({ where: { email: req.params.email } });  
      if (!user)
        return res.status(404).send("Usuario no encontrado");
      const responseText = 
        `Usuario encontrado: Id del usuario: ${user.id}\nNombre: ${user.name}\nEmail: ${user.email}`;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(responseText);
    } catch (error) {
      res.status(500).json({ error: error.message });
    } 
  },

  async getById(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user)
        return res.status(404).json({ message: "User not found" });

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createWithText(req, res) {
    try {
      const user = await User.create(req.body); 
      const responseText = 
        `Usuario creado exitosamente\nId del usuario: ${user.id}\nNombre: ${user.name}\nEmail: ${user.email}`;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(responseText);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user)
        return res.status(404).json({ message: "User not found" });

      await user.update(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user)
        return res.status(404).json({ message: "User not found" });

      await user.destroy();
      res.json({ message: "User deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
