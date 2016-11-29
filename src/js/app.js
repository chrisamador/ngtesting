/**
 *
 * App.js file
 *
 */

var docEl = document.documentElement;
docEl.className = docEl.className.replace('no-js','js');



(function () {


  var app = angular.module('store', []);

  var gems = [{
  	name: 'Dodecahedron',
  	price: 2.2,
  	description: 'this is nice yo'
  },{
  	name: '2lo',
  	price: 999,
  	description: 'this is chris'
  }
  ];
  
  app.controller('StoreController', function () {
  	this.gems = gems;
  	console.log(this);
  })

  app.controller('whyTho', function(){

  })


})();