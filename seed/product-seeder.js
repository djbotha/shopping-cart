var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
  new Product({
    imagePath: 'https://scontent-jnb1-1.xx.fbcdn.net/v/t31.0-8/18238016_1510539708988726_5752793827332417635_o.jpg?oh=7a90c09d45dcb56c13eebc6b3d54fdc7&oe=59B25067',
    title: 'Drummer',
    description: 'Daniël Botha is a session drummer based in Stellenbosch',
    price: 120
  }),
  new Product({
    imagePath: 'https://fb-s-a-a.akamaihd.net/h-ak-fbx/v/t1.0-9/11742694_890573617675098_3928859805455630272_n.jpg?oh=0af821c98260eae811582e1e651db26a&oe=599F0CC2&__gda__=1503916815_c4dc244881d95eb797a698a21b9c684f',
    title: 'Damian Jagjivan',
    description: 'Damian Jagjivan is a session drummer based in Thornton',
    price: 1200
  }),
  new Product({
    imagePath: 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/972197_530758340323296_146273716_n.jpg?oh=a58169c2a1eddd8c43725eadf18aabf5&oe=59A7434B',
    title: 'On The Way Up EP',
    description: 'On The Way Up is Soldier\'s first EP',
    price: 50
  }),
  new Product({
    imagePath: 'https://fb-s-a-a.akamaihd.net/h-ak-fbx/v/t31.0-8/18672993_1386137288118726_8117121322017509708_o.png?oh=5c366e54df43656b13e4f35a111074d3&oe=59B0AD8D&__gda__=1504102995_ef539de04b872820b295ee30e609db53',
    title: 'The Roar Sessions EP',
    description: 'This is Soldier\'s second EP, released in February 2017.',
    price: 30
  }),
  new Product({
    imagePath: 'http://lorempixel.com/output/city-q-c-640-599-1.jpg',
    title: 'Random City',
    description: 'asdf',
    price: 100
  }),
  new Product({
    imagePath: 'http://lorempixel.com/output/transport-q-c-640-599-1.jpg',
    title: 'Airplane',
    description: 'This is an airplane',
    price: 150
  })
];

var done = 0;
for (var i = 0; i<products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if(done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}