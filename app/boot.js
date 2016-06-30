import 'angular-material/angular-material.css!'
import 'font-awesome/css/font-awesome.min.css!'
import 'assets/app.css!'

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import material from 'angular-material'

import appModule from './app'

angular
    .element( document )
    .ready( function() {

        let appName = 'webViewer';

        let body = document.getElementsByTagName("body")[0];
        let app  = angular.module( appName, [ uiRouter, material, appModule ] );

        angular.bootstrap( body, [ app.name ], { strictDi: false });
    });