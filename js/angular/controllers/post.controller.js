(function(){

    'use strict';

    angular.module('app')
        .controller('SinglePostCtrl', SinglePostCtrl)
        .controller('ListPostCtrl', ListPostCtrl);

        SinglePostCtrl.$inject = ['$routeParams', 'SinglePostFactory', 'activePlugin'];
        function SinglePostCtrl($routeParams, SinglePostFactory, activePlugin) {

            var vm = this;

            vm.restApiActive    = activePlugin.rest_api;
            vm.acfActive        = activePlugin.acf;

            vm.getPost = getPost;

            var id = $routeParams.id;

            function getPost(id) {
                SinglePostFactory.getPostData(id).then(function(dataResponse) {
                    vm.post = dataResponse.data;
                });
            }

            if (vm.restApiActive && vm.acfActive) {
                vm.getPost(id);
            }

        };

        ListPostCtrl.$inject = ['$rootScope', 'PostFactory', 'activePlugin'];
        function ListPostCtrl ($rootScope, PostFactory, activePlugin) {

            var vm = this;

            vm.restApiActive    = activePlugin.rest_api;
            vm.acfActive        = activePlugin.acf;

            if (vm.restApiActive && vm.acfActive) {
                vm.contents = new PostFactory();
            }

        };

})();
