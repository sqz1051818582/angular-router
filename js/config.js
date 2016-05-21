App.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state("home.home1", {
            url: '/home1?id&name',
            templateUrl: 'home1.html'
        })
        .state("home.home2", {
            url: '/home2',
            templateUrl: 'home2.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'about.html'
        })
        .state('config', {
            url: '/config',
            templateUrl: 'config.html'
        })
        .state('we', {
            url: '/we',
            templateUrl: 'we.html'
        })
    $urlRouterProvider.otherwise('/home')
}])