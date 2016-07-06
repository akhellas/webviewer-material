import nodes from 'app/nodes/nodes.module'
import admin from 'app/admin/admin.module'
import auth from 'app/auth/auth.module'
import layout from 'app/layout/layout.module'

import stateConfig from './state.config'

let appModule = angular.module('app', [ nodes, admin, auth, layout ] ).name;

angular
    .module('app')
    .config(stateConfig);

export default appModule;