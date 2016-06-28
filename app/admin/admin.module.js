import adminService from './admin.service'
import adminController from './admin.controller'

let admin = angular.module('app.admin', []).name;

angular
    .module('app.admin')
    .service('adminService', adminService)
    .controller('adminController', adminController);

export default admin;