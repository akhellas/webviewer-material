import nodes from 'app/nodes/nodes.module'
import admin from 'app/admin/admin.module'
import auth from 'app/auth/auth.module'
import layout from 'app/layout/layout.module'

//development only, comment out in production
import mocks from 'app/mocks/mocks.module';

import stateConfig from './state.config'

let appModule = angular.module('app', [ mocks, nodes, admin, auth, layout ] ).name;

angular
    .module('app')
    .constant('api', '/api')
    .config(stateConfig);

export default appModule;