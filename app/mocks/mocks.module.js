//import ngMockE2E from 'jspm_packages/github/angular/bower-angular-mocks@1.5.7/ngMockE2E.js'
import 'angular-mocks'

//import nodesMock from './nodes.mock'

let mocks = angular.module('app.mocks', ['app', 'ngMockE2E']).name;

angular
    .module('app.mocks')
    .run(function ($httpBackend) {
        'ngInject'

        let nodes = [
            {
                Id: '1',
                Title: 'ΔΡΑΣΤΗΡΙΟΤΗΤΑ',
                Color: {
                    red: 80,
                    green: 140,
                    blue: 255
                },
                InOverview: false,
                Children: [
                    {
                        Id: '11',
                        Title: 'ΠΤΗΤΙΚΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑ',
                        Color: '',
                        InOverview: false,
                        Children: [
                            {
                                Id: '111',
                                Title: 'ΑΤΑ',
                                Color: '',
                                InOverview: false,
                                Children: []
                            },
                            {
                                Id: '112',
                                Title: 'ΔΑΥ',
                                Color: '',
                                InOverview: false,
                                Children: []
                            },
                            {
                                Id: '113',
                                Title: 'ΔΑΕ',
                                Color: '',
                                InOverview: false,
                                Children: []
                            }
                        ]
                    },
                    {
                        Id: '12',
                        Title: 'ΠΤΗΣΕΙΣ ΝΑΤΟΙΚΩΝ ΧΩΡΩΝ',
                        Color: '',
                        InOverview: false,
                        Children: []
                    }
                ]
            },
            {
                Id: '2',
                Title: 'ΕΠΧΣΕΙΣ-ΑΣΚΗΣΕΙΣ',
                Color: {
                    red: 80,
                    green: 140,
                    blue: 255
                }
                ,
                InOverview: true,
                Children: [
                    {
                        Id: '21',
                        Title: 'ΒΟΛΕΣ ΠΝ & ΣΞ',
                        Color: '',
                        InOverview: false,
                        Children: []
                    }
                ]
            },
            {
                Id: '3',
                Title: 'ΚΑΤΑΣΤΑΣΗ RADAR',
                Color: {
                    red: 80,
                    green: 140,
                    blue: 255

                },
                InOverview: true,
                Children: [
                    {
                        Id: '21',
                        Title: '2ΚΕΠ',
                        Color: '',
                        InOverview: false,
                        Children: [{
                            Id: '21',
                            Title: '3ο ΣΑ ',
                            Color: '',
                            InOverview: false,
                            Children: []
                        }]
                    }
                ]
            }

        ];


        $httpBackend.whenGET('/api/nodes')
                    .respond(nodes);


        $httpBackend.whenGET(/.*/).passThrough();
    });
//.run('authMock', authMock);

export default mocks;