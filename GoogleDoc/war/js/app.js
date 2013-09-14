'use strict';

var EditorState = {
    CLEAN:0, // NO CHANGES
    DIRTY:1, // UNSAVED CHANGES
    SAVE:2, // SAVE IN PROGRESS
    LOAD:3, // LOADING
    READONLY:4
};

google.load('picker', '1');
gapi.load('drive-share');

angular.module('app', ['app.filters', 'app.services', 'app.directives'])
    .constant('saveInterval', 15000)
    .constant('appId', [['457244227012.apps.googleusercontent.com']]) // Change this by your Application ID
    .config(['$routeProvider', function ($routeProvider) {
    	$routeProvider
        .when('/edit/:id', {templateUrl:'partials/editor.html', controller:EditorCtrl})
        .when('/create/:folderId', {templateUrl:'partials/editor.html', controller:EditorCtrl})
        .otherwise({redirectTo:'/edit/'});
}]);
