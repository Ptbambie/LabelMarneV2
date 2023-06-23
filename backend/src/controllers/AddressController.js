const BaseController = require('./BaseController');
const models = require('../models');

class AddressController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = models.address;
  }
}

module.exports = AddressController;
