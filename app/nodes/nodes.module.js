import nodesService from './nodes.service'
import nodesController from './nodes.controller'

let nodes = angular.module('app.nodes', []).name;

angular
    .module('app.nodes')
    .service('nodesService', nodesService)
    .controller('nodesController', nodesController);

export default nodes;