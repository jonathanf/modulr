(function(){
  'use strict';

  angular
  .module('helpers')
  .directive('tooltip', tooltip);

  function tooltip() {
    return {
      transclude: true,
      scope: {
        title: '@'
      },
      link: function (scope, elem, attrs) {
        $(elem).tooltip({
          container: 'body',
          title : scope.title
        });
      }
    };
  }

})();