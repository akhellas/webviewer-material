import nodes from 'app/nodes/nodes.module'
import admin from 'app/admin/admin.module'
import layout from 'app/layout/layout.module'

import stateConfig from './state.config'

let appModule = angular.module('app', [ nodes, admin, layout ] ).name;

angular
    .module('app')
    .config(stateConfig);

export default appModule;