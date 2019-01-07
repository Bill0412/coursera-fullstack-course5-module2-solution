(function() {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.buy = function (index) {
      ShoppingListCheckOffService.buy(index);
    }

    toBuyList.items = ShoppingListCheckOffService.get_toBuyItems();
    console.log('to buy items: ' + toBuyList.items);
    console.log(toBuyList.items[0]);

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.get_boughtItems();

    console.log('bought items: ' + this.items);
  }

  function ShoppingListCheckOffService () {
    var service = this;

    var toBuyList = ["10 cookies", "10 cookies"];
    var boughtList = ["10 cookies"];

    service.buy = function (index) {
      boughtList.push(toBuyList[index]);
      toBuyList.splice(index, 1);
    }

    service.get_toBuyItems = function () {
      return toBuyList;
    }

    service.get_boughtItems = function () {
      return boughtList;
    }

  }

})();
