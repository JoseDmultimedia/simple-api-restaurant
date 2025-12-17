import { Reservation } from "../models/indexModels.js";

export const ReservationController = {
  async getAll(req, res) {
    try {
      const reservations = await Reservation.findAll();
      res.json(reservations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAllText(req, res) {
    try {
      const reservations = await Reservation.findAll();

      const responseText = reservations.map(reservation => 
        `Id de la reserva: ${reservation.id}\nFecha y hora: ${reservation.reservationDate}\nNúmero de personas: ${reservation.numberOfPeople}\nMesa número: ${reservation.tableNumber}`
      ).join('\n\n');

      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(responseText);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async getById(req, res) {
    try {
      const reservation = await Reservation.findByPk(req.params.id);

      if (!reservation)
        return res.status(404).json({ message: "Reservation not found" });

      res.json(reservation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getByIdText(req, res) {
    try {
      const reservation = await Reservation.findByPk(req.params.id);
      if (!reservation)
        return res.status(404).send("Reserva no encontrada");
      const responseText =
        `Id de la reserva: ${reservation.id}\nFecha y hora: ${reservation.reservationDate}\nNúmero de personas: ${reservation.numberOfPeople}\nMesa número: ${reservation.tableNumber}`
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(responseText);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async create(req, res) {
    try {
      const reservation = await Reservation.create(req.body);
      res.json(reservation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createWithText(req, res) {
    try {
      const reservation = await Reservation.create(req.body);
      const responseText =
        `Reserva creada exitosamente:\nId de la reserva: ${reservation.id}\nFecha y hora: ${reservation.reservationDate}\nNúmero de personas: ${reservation.numberOfPeople}\nMesa número: ${reservation.tableNumber}`;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(responseText);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async update(req, res) {
    try {
      const reservation = await Reservation.findByPk(req.params.id);

      if (!reservation)
        return res.status(404).json({ message: "Reservation not found" });

      await reservation.update(req.body);
      res.json(reservation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const reservation = await Reservation.findByPk(req.params.id);

      if (!reservation)
        return res.status(404).json({ message: "Reservation not found" });

      await reservation.destroy();
      res.json({ message: "Reservation deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
