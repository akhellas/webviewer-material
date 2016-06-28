import 'angular-material/angular-material.css!'
import 'font-awesome/css/font-awesome.min.css!'
//import 'assets/app.css!'

import angular from 'angular'
import material from 'angular-material'

import main from './main'

// Load loggers for injection and pre-angular debugging

import { LogDecorator, ExternalLogger } from './utils/LogDecorator'

angular
    .element( document )
    .ready( function() {

        let appName = 'webViewer';
        let $log = new ExternalLogger();

        $log = $log.getInstance( "BOOTSTRAP" );
        $log.debug( "Initializing '{0}'", [ appName ] );

        let body = document.getElementsByTagName("body")[0];
        let app  = angular
                        .module( appName, [ material, main ] )
                        .config( ['$provide', LogDecorator] );

        angular.bootstrap( body, [ app.name ], { strictDi: false });
    });