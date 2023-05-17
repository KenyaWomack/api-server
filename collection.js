// src/models/collection.js
class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return this.model.create(data);
  }

  async read() {
    return this.model.findAll();
  }

  async update(id, data) {
    return this.model.update(data, { where: { id } });
  }

  async delete(id) {
    return this.model.destroy({ where: { id } });
  }
}

module.exports = Collection;
