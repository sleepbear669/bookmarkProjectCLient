var bookmarkApp = angular.module('bookmarkApp', ['ngRoute']);

bookmarkApp.config(['$routeProvider',
 function($routeProvider) {
     $routeProvider.
     when('/join', {
         templateUrl: 'join.html',
         controller: 'joinController'
     }).
     when('/bookmark', {
         templateUrl: 'bookmark.html',
         controller: 'bookmarkController'
     }).
     when('/myPhrase', {
         templateUrl: 'myPhrase.html',
         controller: 'myPhraseController'
     }).
     when('/myBookmark', {
         templateUrl: 'myBookmark.html',
         controller: 'myBookmarkController'
     }).
     when('/bookInfo', {
         templateUrl: 'bookInfo.html',
         controller: 'bookInfoController'
     }).
     otherwise('/', {
         redirectTo : "/"
     });
 }]);