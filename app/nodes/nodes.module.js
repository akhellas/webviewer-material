import nodesService from './nodes.service'
import nodeController from './node.controller'

let nodes = angular.module('app.nodes', []).name;

angular
    .module('app.nodes')
    .service('nodesService', nodesService)
    .controller('nodeController', nodeController);

export default nodes;