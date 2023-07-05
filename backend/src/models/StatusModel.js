const BaseModel = require('./BaseModel');
const db = require('../config/db');

class StatusModel extends BaseModel {
  constructor(db) {
    super('status', db);
  }
}

module.exports = StatusModel;
