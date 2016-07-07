import toastService from './toast.service'
import layoutController from './layout.controller'

let layout = angular.module('app.layout', []).name;

angular
    .module('app.layout')
    .service('toastService', toastService)
    .controller('layoutController', layoutController);

export default layout;