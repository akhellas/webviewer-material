import 'angular-mocks'

let mocks = angular.module('app.mocks', ['app', 'ngMockE2E']).name;

angular
    .module('app.mocks')
    .run(function ($httpBackend) {
        'ngInject'
        
        let users = [
            {
                Id: '1',
                Username: 'admin',
                IsAdmin: true,
                Name: 'administrator user'
            },
            {
                Id: '2',
                Username: 'user2',
                IsAdmin: false,
                Name: 'user 2'
            },
            {
                Id: '3',
                Username: 'user3',
                IsAdmin: false,
                Name: 'user 3'
            }
        ];

        $httpBackend.whenGET('/api/users')
                    .respond(users);

        let roles = [
            {
                Id: '1',
                Title: 'ΚΕΠΙΧ',
                Description: 'bla',
                Rights: [{ _Id: '21', Edit: true, View: false }]
            },
            {
                Id: '2',
                Title: 'ΕΠΙΧΕΙΡΗΣΕΙΣ',
                Description: 'bla',
                Rights: [{ _Id: '3', Edit: false, View: true }]
            },
            {
                Id: '3',
                Title: 'ΗΓΕΣΙΑ',
                Description: 'bla',
                Rights: [{ _Id: '2', Edit: true, View: false }]
            },
            {
                Id: '4',
                Title: 'ΔΙΑΧΕΙΡΙΣΤΕΣ',
                Description: 'bla',
                Rights: [{ _Id: '1', Edit: true, View: true }]
            }
        ];
        
        $httpBackend.whenGET('/api/roles')
                    .respond(roles);

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