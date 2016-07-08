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
                Rights: [{ _Id: '21',Title:'ΔΡΑΣΤΗΡΙΟΤΗΤΑ', Edit: true, View: false },{ _Id: '41',Title:'ΒΟΛΕΣ ΠΝ & ΣΞ', Edit: true, View: true }]
            },
            {
                Id: '2',
                Title: 'ΕΠΙΧΕΙΡΗΣΕΙΣ',
                Description: 'bla',
                Rights: []
            },
            {
                Id: '3',
                Title: 'ΗΓΕΣΙΑ',
                Description: 'bla',
                Rights: []
            },
            {
                Id: '4',
                Title: 'ΔΙΑΧΕΙΡΙΣΤΕΣ',
                Description: 'bla',
                Rights: []
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
                Type: 0,
                Children: [
                    {
                        Id: '11',
                        Title: 'ΠΤΗΤΙΚΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑ',
                        Color: '',
                        InOverview: false,
                        Type: 0,
                        Children: [
                            {
                                Id: '111',
                                Title: 'ΑΤΑ',
                                Color: '',
                                InOverview: false,
                                Type: 0,
                                Children: []
                            },
                            {
                                Id: '112',
                                Title: 'ΔΑΥ',
                                Color: '',
                                InOverview: false,
                                Type: 0,
                                Children: []
                            },
                            {
                                Id: '113',
                                Title: 'ΔΑΕ',
                                Color: '',
                                InOverview: false,
                                Type: 0,
                                Children: []
                            }
                        ]
                    },
                    {
                        Id: '12',
                        Title: 'ΠΤΗΣΕΙΣ ΝΑΤΟΙΚΩΝ ΧΩΡΩΝ',
                        Color: '',
                        InOverview: false,
                        Type: 0,
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
                Type: 0,
                Children: [
                    {
                        Id: '21',
                        Title: 'ΒΟΛΕΣ ΠΝ & ΣΞ',
                        Color: '',
                        InOverview: false,
                        Type: 0,
                        Children: []
                    },
                    {
                        Id: '22',
                        Title: 'ΒΙΒΛΙΟΘΗΚΗ ΕΠΙΧΕΙΡΗΣΕΩΝ',
                        Color: '',
                        InOverview: false,
                        Type: 1,
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
                Type: 0,
                Children: [
                    {
                        Id: '31',
                        Title: '2ΚΕΠ',
                        Color: '',
                        InOverview: false,
                        Children: [{
                            Id: '311',
                            Title: '3ο ΣΑ ',
                            Color: '',
                            InOverview: false,
                            Type: 0,
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

export default mocks;