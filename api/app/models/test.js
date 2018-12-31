// const Product = require('./product.js')

// const InvLineItem = require('./inv_line_item.js')



// const data = {
//           product_id: 2,
//           inventory_session_id: 3,
//           quantity: 13
//         }



// InvLineItem.addItem(data)
// .then(res => {
//   let thing = res.toJSON()
//   return Product.getOne(thing.product_id)
//           .then()
// })
// .then(p => {
//    console.log(p.current_qty)
// })
// .then(qty => {
//   Product.editProduct
// })

// Product.getAllCurrent()
// .then(res => {
//   console.log(res.toJSON())
// })

// Product.deleteProduct(4)
// .then(res => {
//   console.log(res.toJSON())
// })

// Product.getAll()
// .then(res => {
//   console.log(res.toJSON())
// })

// Product.getCurrentQty(4)
// .then(res => res.toJSON())
// .then(qty => {
//   Product.editProduct(4, {current_qty: qty})
// })

// Product.getCurrentQty(4)
// .then(res => res.toJSON().current_qty)
// .then(qty => {
//   Product.updateQty(4, )
// })
// .then(res => {
//   console.log(res.toJSON())
// })
