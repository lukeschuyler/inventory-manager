class Controller {
  constructor(model) {
    this._model_ = model;
    this.getOne = this.getOne.bind(this);
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.destroy = this.destroy.bind(this);
    this.update = this.update.bind(this);
  }

  getAll(req, res, next) {
    this._model_.getAll()
    .then(products => res.status(200).json(products))
    .catch(error => next(error))
  }

  getOne({ params: {id} }, res, next) {
    if (parseInt(id) != id) {
      const err = new Error('404 Not Found');
      err.status = 404;
      return next(err);
    }
    this._model_.getOne({id})
    .then(product => res.status(200).json(product))
    .catch(error => next(error))
  }

  create({body}, res, next) {
    this._model_.create(body)
    .then(product => res.status(200).json(product))
    .catch(error => next(error))
  }

  destroy({params: {id} }, res, next) {
    this._model_.destroy(id)
    .then(product => res.status(202).json(product))
    .catch(error => next(error))
  }

  update({body}, res, next) {
    const id = body.id;
    this._model_.update({id}, body)
    .then(product => res.status(200).json(product))
    .catch(error => next(error))
  }
  
}

module.exports = Controller;