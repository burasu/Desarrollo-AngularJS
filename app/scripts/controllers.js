(function ()
{
    'use strict';

    angular.module('blog.controllers', ['blog.services']);

    function PostListCtrl(Post)
    {
        this.posts = Post.query();
    }

    angular
        .module('blog.controllers')
        .controller('PostListCtrl', PostListCtrl);

})();
