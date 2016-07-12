import nodesService from './nodes/nodes.service'

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
    .state('admin.banner', {
      url: "/banner",
      templateUrl: "app/admin/views/admin.banner.html"
    })
    .state('admin.roles', {
      url: "/roles",
      templateUrl: "app/admin/views/admin.roles.html",
      controller: "rolesController",
      controllerAs: "roles"
    })
    .state('admin.users', {
      url: "/users",
      templateUrl: "app/admin/views/admin.users.html"
    })
    .state('nodes', {
      abstract: true,
      url: '/nodes',
      template: '<ui-view/>'
    })
    .state('nodes.detail', {
      url: "/:id",
      templateUrl: "app/nodes/views/node.base.html",
      controller: "nodeController",
      controllerAs: "details",
      resolve: {
        node: function ($stateParams, nodesService) {
          return nodesService.getNode($stateParams.id)
                             .then((response) => { return response; });
        }
      }
    });
}

export default stateConfig;