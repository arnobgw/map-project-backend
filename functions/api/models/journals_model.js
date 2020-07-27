const database = require("../database");

class JournalModel {
  constructor() {
    if (this.instance) return this.instance;
    JournalModel.instance = this;
  }

  get() {
    return database.getList("journal");
  }

  getById(id) {
    return database.get("journal", id);
  }

  create(journal) {
    return database.create("journal", journal);
  }

  delete(id) {
    return database.delete("journal", id);
  }

  update(id, journal) {
    return database.set("journal", id, journal);
  }
}

module.exports = new JournalModel();