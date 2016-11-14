(function(){

    'use strict';

    angular.module('app')

        console.log('This file is not added on functions.php');

        .filter('postFilter', postFilter);

        function postFilter() {

            return function (items_input, firstValue, secondValue) {
                var output = [];

                firstValue = parseInt(firstValue);
                secondValue = parseInt(secondValue);

                if (isNaN(firstValue) || isNaN(secondValue)) {
                    return output;
                } else {
                    angular.forEach(items_input, function (item) {
                        if (item.fields.name_custom_field >= firstValue && item.fields.name_custom_field <= secondValue) {
                            output.push(item);
                        }
                    });
                }

                return output;
            }
        };

})();
