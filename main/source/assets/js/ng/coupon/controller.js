angular.module('calm-admin')
  .controller('coupon', ['$scope', 'couponDemoData', 'generalDemoData', function($scope, couponDemoData, generalDemoData){
    $scope.couponFm = couponDemoData.couponCreateFm;

    $scope.usagesList = couponDemoData.couponUsages;
    $scope.couponList = [];
    $scope.couponUsageDetail = {};

    $scope.roomList = generalDemoData.rooms;
    $scope.extraList = generalDemoData.extras;

    $scope.couponType = couponDemoData.couponType;

    console.log($scope.roomList);

    // INIt demo data
    var initCpArray = [0,1,2,3,4,5,6,7,8,9]
    initCpArray.forEach(function(i){
      $scope.couponList.push($.extend(true, {}, couponDemoData.sampleCoupon));
    });

    // Adding one more roomSelect box
    $scope.addMoreRoomSelect = function(e){
      e.preventDefault();
      $scope.couponFm.applyToRooms.push({
        val: ''
      });
    };

    // Adding one more extra-select box
    $scope.addMoreExtraSelect = function(e){
      e.preventDefault();
      $scope.couponFm.applyToExtras.push({
        val: ''
      });
    };

    // Removing room or extra selects
    $scope.removeRoomSelect = function(ind){
      $scope.couponFm.applyToRooms.splice(ind, 1)
    };
    $scope.removeExtraSelect = function(ind){
      $scope.couponFm.applyToExtras.splice(ind, 1)
    };
  }]);
