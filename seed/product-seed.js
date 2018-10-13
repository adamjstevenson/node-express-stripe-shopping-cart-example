var Product = require('../models/product');

var mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping-cart');

var products = [
  new Product({
    img: 'https://picsum.photos/300/300?image=950',
    title: 'Bridge print',
    price: 120
  }),
  new Product({
    img: 'https://picsum.photos/300/300?image=939',
    title: 'Building print',
    price: 150
  }),
  new Product({
    img: 'https://picsum.photos/300/300?image=931',
    title: 'Mountain print',
    price: 170
  }),
];

var done = 0;
for (var i = 0; i < products.length ; i++){
  products[i].save(function(err, result){
    done++;
    if (done === products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
