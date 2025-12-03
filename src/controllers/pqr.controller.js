import { Pqr } from "../models/indexModels.js";

export const PqrController = {
  async getAll(req, res) {
    try {
      const pqrs = await Pqr.findAll();
      res.json(pqrs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const pqr = await Pqr.findByPk(req.params.id);

      if (!pqr)
        return res.status(404).json({ message: "Pqr not found" });

      res.json(pqr);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const pqr = await Pqr.create(req.body);
      res.json(pqr);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const pqr = await Pqr.findByPk(req.params.id);

      if (!pqr)
        return res.status(404).json({ message: "Pqr not found" });

      await pqr.update(req.body);
      res.json(pqr);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const pqr = await Pqr.findByPk(req.params.id);

      if (!pqr)
        return res.status(404).json({ message: "Pqr not found" });

      await pqr.destroy();
      res.json({ message: "Pqr deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
