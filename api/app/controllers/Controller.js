class Controller {

  getAll(req, res, next) {
    Product.getAll()
    .then(products => res.status(200).json(products))
    .catch(error => next(error))
  }

  getOne({ params: {id} }, res, next) {
    Product.getOne(id)
    .then(product => res.status(200).json(product))
    .catch(error => next(error))
  }

  addProduct({body}, res, next) {
    Product.addProduct(body)
    .then(product => res.status(200).json(product))
    .catch(error => next(error))
  }

  deleteProduct({params: {id} }, res, next) {
    Product.deleteProduct(id)
    .then(product => res.status(202).json(product))
    .catch(error => next(error))
  }

  editProduct({body}, res, next) {
    const id = body.id
    Product.editProduct(id, body)
    .then(product => res.status(200).json(product))
    .catch(error => next(error))
  }
  
}

module.exports = Controller;
