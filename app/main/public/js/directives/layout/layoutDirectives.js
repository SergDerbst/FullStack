'use stricts';

module.exports = {
    fsHeader: function (module) {
        module.directive('fsHeader', [function () {
            return {
                replace: true,
                restrict: 'E',
                templateUrl: 'partials/layout/header'
            };
        }])
    }
};