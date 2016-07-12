import nodesService from './nodes.service'
import nodeController from './node.controller'
// import formController from './form.controller'

let nodes = angular.module('app.nodes', []).name;

angular
    .module('app.nodes')
    .service('nodesService', nodesService)
    .controller('nodeController', nodeController);
// .controller('formController', formController);

export default nodes;