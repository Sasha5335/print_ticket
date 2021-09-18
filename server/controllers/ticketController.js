const { Ticket } = require('../models/models');

class TicketController {
  async create(req, res) {
    const { price } = req.body;
    const ticet = await Ticket.create({ price });
    return res.json(ticet);
  }

  async getAll(req, res) {
    const ticets = await Ticket.findAll();
    return res.json(ticets);
  }
}

module.exports = new TicketController();
