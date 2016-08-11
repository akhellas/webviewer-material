import adminService from './admin.service'
import adminController from './admin.controller'
import rolesController from './roles.controller'
import viewController from './view.controller'

let admin = angular.module('app.admin', []).name;

angular
    .module('app.admin')
    .service('adminService', adminService)
    .controller('adminController', adminController)
    .controller('rolesController', rolesController)
    .controller('viewController', viewController);

export default admin;