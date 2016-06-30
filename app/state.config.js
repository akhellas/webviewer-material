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
      url: "/admin/nodes",
      templateUrl: "app/admin/views/admin.nodes.html"
    })
    .state('admin.roles', {
      url: "/admin/roles",
      templateUrl: "app/admin/views/admin.roles.html"
    })
    .state('admin.users', {
      url: "/admin/users",
      templateUrl: "app/admin/views/admin.users.html"
    });
}

export default stateConfig;