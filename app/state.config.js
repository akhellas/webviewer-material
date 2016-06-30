function stateConfig($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('app', {
      url: "/",
      templateUrl: "app/layout/views/home.html"
    })

    .state('admin', {
      abstract: true,
      url: '/admin',
      template: '<ui-view/>'
    })
    .state('admin.nodes', {
      url: "/nodes",
      templateUrl: "app/admin/views/admin.nodes.html"
    })
    .state('admin.roles', {
      url: "/roles",
      templateUrl: "app/admin/views/admin.roles.html"
    })
    .state('admin.users', {
      url: "/users",
      templateUrl: "app/admin/views/admin.users.html"
    });
}

export default stateConfig;