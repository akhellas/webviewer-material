//import ngMockE2E from 'jspm_packages/github/angular/bower-angular-mocks@1.5.7/ngMockE2E.js'
import 'angular-mocks'

import nodesMock from './nodes.mock'

let mocks = angular.module('app.mocks', [ 'app', 'ngMockE2E']).name;

angular
    .module('app.mocks')
    .run(nodesMock);
    //.run('authMock', authMock);

export default mocks;