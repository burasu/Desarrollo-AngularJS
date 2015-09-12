(function ()
{
    'use strict';

    angular.module('blog.services', ['ngResource']);

    function Post ($resource, BaseUrl)
    {
        return $resource(BaseUrl + '/posts/:postId', { postId: '@_id' });
    }

    angular
        .module('blog.services')
        .constant('BaseUrl', 'http://jsonplaceholder.typicode.com')
        .factory('Post', Post);
})();
