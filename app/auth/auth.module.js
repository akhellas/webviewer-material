import authService from './auth.service'

let auth = angular.module('app.auth', []).name;

angular
    .module('app.auth')
    .service('authService', authService);

export default auth;