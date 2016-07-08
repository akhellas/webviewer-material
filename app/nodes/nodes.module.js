import nodesService from './nodes.service'
import nodesController from './nodes.controller'
import libraryController from './library.controller'

let nodes = angular.module('app.nodes', []).name;

angular
    .module('app.nodes')
    .service('nodesService', nodesService)
    .controller('nodesController', nodesController)
    .controller('libraryController', libraryController);

export default nodes;