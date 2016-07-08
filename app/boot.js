import 'angular-material/angular-material.css!'
import 'font-awesome/css/font-awesome.min.css!'
import 'assets/app.css!'

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngMaterial from 'angular-material'
import ngFileUpload from 'ng-file-upload'

import appModule from './app'

angular
    .element( document )
    .ready( function() {

        let appName = 'webViewer';

        let body = document.getElementsByTagName("body")[0];
        let app  = angular.module( appName, [ uiRouter, ngMaterial, ngFileUpload, appModule ] );

        angular.bootstrap( body, [ app.name ], { strictDi: false });
    });