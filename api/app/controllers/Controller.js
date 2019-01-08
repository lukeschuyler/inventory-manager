
/*
 * BASE APP CONTROLLER
 * Provides basic CRUD functionality for any controller
 * that extends from this base Controller class
 */
class Controller {
  // Controllers inheriting from this controller
  // will call the super and pass in the associated model
  constructor(model) {
    this._model = model;
    this.getOne =  this.getOne.bind(this);
    this.getAll =  this.getAll.bind(this);
    this.create =  this.create.bind(this);
    this.destroy = this.destroy.bind(this);
    this.update =  this.update.bind(this);
  }
  
  // CREATE
  async create({ body }, res, next) {
    let [ err, item ] = await to(this._model.create(body));
    if (err) return err;
    return res.status(200).json(item);
  }
  
  // READ
  async getAll(req, res, next) {
    let [ err, items ] = await to(this._model.getAll());
    if (err) return err;
    return res.status(200).json(items);
  }

  async getOne({ params: {id} }, res, next) {
    if (parseInt(id) != id) {
      const err = new Error('404 Not Found');
      err.status = 404;
      return next(err);
    }
    
    let [ err, item ] = await to(this._model.getOne({id}));
    if (err) return err;
    return res.status(200).json(item);
  }
  
  // UPDATE
  async update({body}, res, next) {
    const id = body.id;
    let [ err, item ] = await to(this._model.update({id}, body));
    if (err) return err;
    return res.status(200).json(item);
  }
  
  // DESTROY
  async destroy({params: {id} }, res, next) {
    let [ err, item ] = await to(this._model.destroy(id));
    if (err) return err;
    return res.status(202).json(item);
  }
}

module.exports = Controller;
