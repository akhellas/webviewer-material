import { ExternalLogger } from 'app/utils/LogDecorator'

import nodes from 'app/nodes/nodes.module'
import admin from 'app/admin/admin.module'
import layout from 'app/layout/layout.module'

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'main' module" );

export default angular.module('main', [ nodes, admin, layout ] ).name;