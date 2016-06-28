import layoutController from './layout.controller'

let layout = angular.module('app.layout', []).name;

angular
    .module('app.layout')
    .controller('layoutController', layoutController);

export default layout;