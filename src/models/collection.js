'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      let record = await this.model.create(data);
      return record;
    } catch (error) {
      return error;
    }
  }

  async read() {
    let record = null;
    try {
      record = await this.model.findAll();
      return record;
    } catch (error) {
      return error;
    }
  }

  async update(id, data) {
    return this.model.update(data, { where: { id } });
  }

  async delete(id) {
    return this.model.destroy({ where: { id } });
  }
}

module.exports = Collection;
