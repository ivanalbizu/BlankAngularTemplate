(function(){

    'use strict';

    angular.module('app', [
            'ngAnimate',
            'ngRoute',
            'ngSanitize',
            'infinite-scroll'
        ])
        .config(config)
        .constant('URL_API', {
            BASE_URL: localized.site_url + '/wp-json'
        })
        .value('activePlugin', {
            'rest_api': localized.state_plugin_rest_api,
            'acf': localized.state_plugin_acf
        })
        .run(run);

        //run.$inject = ['$rootScope', '$location'];
        function run($rootScope, $location) {
            var path = function() { return $location.path(); };
            $rootScope.$watch(path, function(newVal, oldVal){
                $rootScope.activetab = newVal;
            });
            //$rootScope.restApiActive = localized.state_plugin_rest_api;
        }

        function config($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: localized.views + 'home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })
            .when('/posts', {
                templateUrl: localized.views + 'list-post.html',
                controller: 'ListPostCtrl',
                controllerAs: 'vm'
            })
            .when('/posts/:id', {
                templateUrl: localized.views + 'single-post.html',
                controller: 'SinglePostCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
        };
})();
