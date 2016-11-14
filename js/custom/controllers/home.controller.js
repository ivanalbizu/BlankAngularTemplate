(function(){

    'use strict';

    angular.module('app')
        .controller('HomeCtrl', HomeCtrl);

        HomeCtrl.$inject = ['SinglePostFactory', 'activePlugin'];
        function HomeCtrl (SinglePostFactory, activePlugin) {

            var vm = this;

            vm.restApiActive   = activePlugin.rest_api;
            vm.acfActive       = activePlugin.acf;

            if (vm.restApiActive && vm.acfActive) {
                console.log('Entra en Home Ctrl');
            }
        };

})();
