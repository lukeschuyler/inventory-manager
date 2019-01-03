const amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: process.env.API_KEY,
  awsSecret: process.env.API_SECRET,
  awsTag: process.env.API_TAG
});

module.exports.search = (req, res, next) => {
  client.itemSearch({
    Keywords: req.body.query,
    ResponseGroup: 'Images, ItemAttributes'
  })
  .then(results => {
    console.log("result: " + result);
    let searchResults = []
    results.forEach((result, i) => {
      let searchProduct = {}
      searchProduct.name = result.ItemAttributes[0].Title[0];

      if (result.DetailPageURL[0]) {
        searchProduct.link = result.DetailPageURL[0];
      } else {
        searchProduct.link = 'No URL'
      }

      result.ASIN[0] ? searchProduct.ASIN = result.ASIN[0] : searchProduct.ASIN = 'No ASIN'

      result.ItemAttributes[0].UPC ? searchProduct.UPC = result.ItemAttributes[0].UPC[0] : searchProduct.UPC = 'No UPC'

      if(result.ImageSets) {
        searchProduct.image = result.ImageSets[0].ImageSet[0].LargeImage[0].URL[0];
      } else {
        searchProduct.image = 'No Image Available'
      }

      if(result.ItemAttributes[0].Feature) {
        searchProduct.description = result.ItemAttributes[0].Feature[0];
      } else {
        searchProduct.description = 'No Description Available'
      }

      if(result.ItemAttributes[0].ListPrice) {
        searchProduct.price = (result.ItemAttributes[0].ListPrice[0].Amount[0] / 100).toFixed(2);
      } else {
        searchProduct.price = 'No Price Available'
      }

      searchResults.push(searchProduct)
    })
    console.log("searchResults " + searchResults);
     res.status(200).json(searchResults)
  })
  .catch(err => {
    console.log("CATCH: ", JSON.stringify(err));
    return next(err)
  });
}
