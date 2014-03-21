'use strict';

/* Filters */
angular.module('smokeymonkeyFilters', []).filter('dateConvert', function() {
  return function(date) {
    return moment(date).zone("+09:00").format("YYYY-MM-DD H:mm:ss");
  };
});
