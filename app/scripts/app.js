(function ()
{
    'use strict';

    // Aquí irá la funcionalidad.
    angular.module('blog', ['ngRoute', 'ngAnimate', 'blog.controllers', 'blog.templates']);

    function config ($locationProvider, $routeProvider)
    {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'views/post-list.tpl.html',
                controller: 'PostListCtrl',
                controllerAs: 'postlist'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    angular
        .module('blog')
        .config(config);

})();
