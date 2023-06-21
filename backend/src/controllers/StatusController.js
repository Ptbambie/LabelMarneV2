const models = require('../models');

class StatusController {
  static async getAll(req, res) {
    try {
      const statuses = await models.status.getAll();
      res.status(200).json(statuses);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  }
}
