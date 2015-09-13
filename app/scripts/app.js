(function ()
{
    'use strict';

    // Aquí irá la funcionalidad.
    angular.module('blog', ['ngRoute', 'ngAnimate', 'blog.controllers', 'blog.templates']);

    function config ($locationProvider, $routeProvider)
    {
/*        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
*/
        $routeProvider
            .when('/', {
                templateUrl: 'views/post-list.tpl.html',
                controller: 'PostListCtrl',
                controllerAs: 'postlist'
            })
            .when('/post/:postId', {
                templateUrl: 'views/post-detail.tpl.html',
                controller: 'PostDetailCtrl',
                controllerAs: 'postdetail'
            })
            .when('/new', {
                templateUrl: 'views/post-create.tpl.html',
                controller: 'PostCreateCtrl',
                controllerAs: 'postcreate'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    angular
        .module('blog')
        .config(config);

})();
