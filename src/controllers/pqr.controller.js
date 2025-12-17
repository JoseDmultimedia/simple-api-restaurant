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

  async getAllText(req, res) {
    try {
      const pqrs = await Pqr.findAll();
      const responseText = pqrs.map(pqr => 
        `Id del PQR: ${pqr.id}\nTitulo: ${pqr.subject}\nTipo de PQR: ${pqr.type}\nMensaje del usuario: ${pqr.message}`
      ).join('\n\n');
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(responseText);
    } catch (error) {
      res.status(500).send(error.message);
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

  async getByIdText(req, res) {
    try {
      const pqr = await Pqr.findByPk(req.params.id);
      if (!pqr)
        return res.status(404).send("PQR no encontrado");
      const responseText =
        `Id del PQR: ${pqr.id}\nTitulo: ${pqr.subject}\nTipo de PQR: ${pqr.type}\nMensaje del usuario: ${pqr.message}`;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(responseText);
    } catch (error) {
      res.status(500).send(error.message);
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

  async createWithText(req, res) {
    try { 
      const pqr = await Pqr.create(req.body);
      const responseText =
        `PQR creado exitosamente:\nId del PQR: ${pqr.id}\nTitulo: ${pqr.subject}\nTipo de PQR: ${pqr.type}\nMensaje del usuario: ${pqr.message}`;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(responseText);
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
